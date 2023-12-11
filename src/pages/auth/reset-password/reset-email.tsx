import { FunctionComponent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Button, Flex, Input, Text } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { Api, Types } from 'modules/auth';

interface ResetEmailProps {}

const schema = yup.object({
	email: yup.string().min(5).email().label('Email').required()
});

const ResetEmail: FunctionComponent<ResetEmailProps> = () => {
	const [ChackCode, setchackCode] = useState(false);

	const form = useForm<Types.IForm.ResetEmail>({
		initialValues: {
			email: ''
		},
		validate: yupResolver(schema)
	});
	const formCheak = useForm<{ code: string; email: string }>({
		initialValues: {
			code: '',
			email: ''
		},
		validate: yupResolver(schema)
	});
	const navigete = useNavigate();

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const { data } = await Api.ResetEmaill(form.values);

			formCheak.setValues({ email: form.values.email });

			console.log(data);
		} catch (error: any) {
			console.log(error);
		}

		setchackCode(true);
	};

	const handleCheckCode = () => {
		console.log('ddqw');

		// try {
		// 	const { data }: any = Api.Checkpassword(formCheak.values);

		// 	console.log(data);
		// } catch (error: any) {
		// 	console.log(error);
		// }
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
						Shaxsiy kabinetingizni himoya qilish maqsadida, parolingizni muntazam yangilab turishingizni tavsiya qilamiz.
					</Text>
				</Flex>

				<form style={{ width: '100%' }} onSubmit={onSubmit}>
					<Flex w="100%" direction="column" gap={20}>
						<Input
							disabled={ChackCode}
							{...form.getInputProps('email')}
							w="100%"
							radius={10}
							styles={inputStyles}
							placeholder="Electron pochta manzilingizni kiriting"
						/>
						{ChackCode ? (
							<Input w="100%" {...formCheak.getInputProps('code')} radius={10} styles={inputStyles} placeholder="Check code tastiqlang" />
						) : (
							''
						)}
					</Flex>
					<Flex mt={20} justify="center" align="center" w="100%">
						{!ChackCode ? (
							<Button type="submit" p="8px 16px" radius="10px" bg="#01c3a7 !important" w="100%">
								Dovom etish
							</Button>
						) : (
							<Button onClick={handleCheckCode} p="8px 16px" radius="10px" bg="#01c3a7 !important" w="100%">
								Tastiqlash
							</Button>
						)}
					</Flex>
				</form>
				<Flex justify="space-between" w="100%" align="center">
					<Link style={{ textDecoration: 'none' }} to="/auth/login">
						Kirish
					</Link>
					<Link style={{ textDecoration: 'none' }} to="/auth/register">
						Ro'yhata otish
					</Link>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default ResetEmail;
