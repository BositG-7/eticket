import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Button, Flex, Input, PasswordInput, Text } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { Api, Types } from 'modules/auth';
// eslint-disable-next-line import/order
import { IMaskInput } from 'react-imask';
import { clearSessionReset, clearSessionVerification, getSessionVerification } from 'services/store';

const schema = yup.object({
	username: yup.string().min(4).label('Username').required(),
	password: yup.string().min(1).label('Password').required(),
	re_password: yup
		.string()
		.oneOf([yup.ref('password')], 'Passwords must match')
		.label('Confirm password')
		.required()
});

const Register = () => {
	const { getInputProps, onSubmit } = useForm<Types.IForm.Register>({
		initialValues: {
			first_name: '',
			last_name: '',
			username: '',
			password: '',
			re_password: ''
		},
		validate: yupResolver(schema)
	});
	const [ActiveButton, setActiveButton] = useState('1');

	useEffect(() => {
		clearSessionReset();
	}, []);

	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const onRegister = async (data: Types.IForm.Register) => {
		setLoading(true);

		const { email }: any = getSessionVerification();

		try {
			const requestData = {
				...data,
				email
			};

			await Api.Register(requestData);

			navigate('/rules');
			setLoading(false);
			clearSessionVerification();
		} catch (err: any) {
			notifications.show({
				message: err.data.username
			});
			setLoading(false);
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
				<Flex gap={5} justify="center" align="center" w="100%">
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
				</Flex>
				<form style={{ width: '100%' }}>
					<Flex w="100%" direction="column" gap={20}>
						{ActiveButton === '1' && (
							<>
								<Input<any>
									component={IMaskInput}
									mask="+000 (00) 000-00-00"
									w="100%"
									radius={10}
									styles={inputStyles}
									placeholder="+998 (00) 000-00-00"
								/>

								<PasswordInput styles={inputStyles} placeholder="Password" radius="10px" w="100%" />
							</>
						)}

						{ActiveButton === '2' && (
							<>
								<Input<any> w="100%" radius={10} styles={inputStyles} placeholder="Electron pochta manzilingizni kiriting" />

								<PasswordInput styles={inputStyles} placeholder="Password" radius="10px" w="100%" />
							</>
						)}
					</Flex>
					<Flex mt={20} justify="center" align="center" w="100%">
						<Button p="8px 16px" radius="10px" bg="#01c3a7 !important" w="100%">
							Kirish
						</Button>
					</Flex>
				</form>
				<Flex justify="space-between" w="100%" align="center">
					<Link style={{ textDecoration: 'none' }} to="/reset-password">
						Parolni tiklash
					</Link>
					<Link style={{ textDecoration: 'none' }} to="/auth/register">
						Ro'yhata otish
					</Link>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Register;
