import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Button, Flex, Input, PasswordInput, Text } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { Api, Types } from 'modules/auth';
// eslint-disable-next-line import/order
// import { IMaskInput } from 'react-imask';

const schema = yup.object({
	name: yup.string().min(4).label('Username').required(),
	surname: yup.string().min(4).label('Surname').required(),
	password: yup.string().min(1).label('Password').required(),
	email: yup.string().min(4).label('Email').required(),
	birthday: yup.string().min(4).label('Birthday').required()
});

const Register = () => {
	const form = useForm<Types.IForm.Register>({
		initialValues: {
			name: '',
			surname: '',
			password: '',
			email: '',
			birthday: ''
		},
		validate: yupResolver(schema)
	});
	const formCheak = useForm<{ code: string; email: string }>({
		initialValues: {
			code: '',
			email: form.values.email
		}
	});

	const [ActiveButton, setActiveButton] = useState('2');
	const [ChackCode, setchackCode] = useState(false);

	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const onRegister = async (e: React.FormEvent<HTMLFormElement>) => {
		setLoading(true);
		e.preventDefault();

		setchackCode(true);
		try {
			const { data }: any = await Api.Register(form.values);

			console.log(data);
			formCheak.setValues({ email: form.values.email });

			notifications.show({ message: 'Check kodni tastiqlang ', color: 'green' });
		} catch (error: any) {
			console.log(error);
		}
	};
	const inputStyles = {
		input: {
			width: '100%',
			backgroundColor: '#f0f2f7 !important',
			fontSize: '18px',
			fontStyle: 'normal',
			fontWeight: 400,
			lineHeight: '20px'
		}
	};
	const handleCheckCode = () => {
		try {
			const { data }: any = Api.Checkpassword(formCheak.values);

			console.log(data);
			navigate('/auth/login');
		} catch (error: any) {
			console.log(error);
		}
	};

	return (
		<Flex mt={100} justify="center" w="100%" h="100vh">
			<Flex
				gap={20}
				direction="column"
				style={{ borderRadius: '4px', boxShadow: '0 0 10px rgba(23,75,122,.08)' }}
				h="fit-content"
				bg="#fff"
				w="450px"
				p={24}>
				<Flex style={{ borderRadius: '4px' }} h="40px" p={15} bg="linear-gradient(0deg,rgba(251,187,0,.15),rgba(251,187,0,.15)),#fff" maw="100%">
					<Text size={13} color="#b88c09">
						{' '}
						Shaxsiy kabinetingizni himoya qilish maqsadida, parolingizni muntazam yangilab turishingizni tavsiya qilamiz.
					</Text>
				</Flex>
				{/* <Flex gap={5} justify="center" align="center" w="100%">
					<Button
						style={{ borderRadius: '10px 0 0 10px!important' }}
						w="100%"
						p={10}
						color="#f0f2f7"
						onClick={() => {
							setActiveButton('1');
						}}
						bg={ActiveButton === '1' ? '#01c3a7 !important' : '#f0f2f7 !important'}>
						Telefon
					</Button>
					<Button
						bg={ActiveButton === '2' ? '#01c3a7 !important' : '#f0f2f7 !important'}
						onClick={() => {
							setActiveButton('2');
						}}
						color="black"
						p={10}
						style={{ borderRadius: '10px 0 0 10px!important' }}
						w="100%">
						Pochta
					</Button>
				</Flex> */}
				<form style={{ width: '100%' }} onSubmit={onRegister}>
					<Flex w="100%" direction="column" gap={20}>
						{ActiveButton === '1' && (
							<>
								{/* <Input<any>
									component={IMaskInput}
									mask="+000 (00) 000-00-00"
									w="100%"
									radius={10}
									styles={inputStyles}
									placeholder="+998 (00) 000-00-00"
								/>

								<PasswordInput styles={inputStyles} placeholder="Password" radius="10px" w="100%" /> */}
							</>
						)}

						{ActiveButton === '2' && (
							<>
								<Input<any>
									disabled={ChackCode}
									{...form.getInputProps('name')}
									w="100%"
									radius={10}
									styles={inputStyles}
									placeholder="Name..."
								/>
								<Input<any>
									disabled={ChackCode}
									{...form.getInputProps('surname')}
									w="100%"
									radius={10}
									styles={inputStyles}
									placeholder="Surname..."
								/>
								<Input<any>
									disabled={ChackCode}
									{...form.getInputProps('email')}
									w="100%"
									radius={10}
									styles={inputStyles}
									placeholder="Electron pochta manzilingizni kiriting"
								/>

								<PasswordInput
									styles={inputStyles}
									disabled={ChackCode}
									{...form.getInputProps('password')}
									placeholder="Password"
									radius="10px"
									w="100%"
								/>
								<Input
									type="date"
									disabled={ChackCode}
									{...form.getInputProps('birthday')}
									w="100%"
									radius={10}
									styles={inputStyles}
									placeholder="Birthday"
								/>

								{ChackCode ? (
									<Input
										w="100%"
										{...formCheak.getInputProps('code')}
										radius={10}
										styles={inputStyles}
										placeholder="Check code tastiqlang"
									/>
								) : (
									''
								)}
							</>
						)}
					</Flex>
					<Flex mt={20} justify="center" align="center" w="100%">
						{!ChackCode ? (
							<Button type="submit" p="8px 16px" radius="10px" bg="#01c3a7 !important" w="100%">
								RO'YXADAN OTISH
							</Button>
						) : (
							<Button onClick={handleCheckCode} p="8px 16px" radius="10px" bg="#01c3a7 !important" w="100%">
								Tastiqlash
							</Button>
						)}
					</Flex>
				</form>
				<Flex justify="end" w="100%" align="center">
					<Link style={{ textDecoration: 'none' }} to="/auth/login">
						Oldin ro'yxatdan o'tganmisiz? Kirish
					</Link>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Register;
