import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Box, Button, Flex, InputBase, Paper, PasswordInput, Text, Title } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { Api, Types } from 'modules/auth';
import { clearSession, clearSessionVerification } from 'services/store';

import cursor from '../../assets/images/cursor.png';
import threeD from '../../assets/images/threeD.png';

import '../../assets/styles/login.scss';

interface LoginProps {}

const schema = yup.object({
	username: yup.string().min(4).label('Username').required(),
	password: yup.string().min(1).label('Password').required()
});

function Login(props: LoginProps) {
	const form = useForm<Types.IForm.Login>({
		initialValues: {
			username: '',
			password: ''
		},
		validate: yupResolver(schema)
	});

	useEffect(() => {
		clearSessionVerification();
		clearSession();
	}, []);
	const [loading, setLoading] = useState(false);

	const onLogin = async (par: Types.IForm.Login) => {
		setLoading(true);
		try {
			const { data } = await Api.Login(par);

			console.log(data);

			window.location.href = '/';
		} catch (err: any) {
			// notifications.show(err.message);
		} finally {
			setLoading(false);
		}
	};
	const navigate = useNavigate();

	return (
		<Box h="90vh" w="100%" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '200px' }}>
			<div className="right">
				<img src={cursor} alt="cursor" />
			</div>

			<form onSubmit={form.onSubmit(onLogin)}>
				<Paper bg="var(--paper-bg)" w={400}>
					<Flex direction="column" gap={20} align="center" p={20}>
						<Flex direction="column" gap={15} w="100%">
							<InputBase autoFocus placeholder="username" radius="sm" {...form.getInputProps('username')} />

							<PasswordInput
								placeholder="Password"
								radius="sm"
								sx={{
									border: 'none'
								}}
								{...form.getInputProps('password')}
							/>
							<Title size="12" mt="0">
								<Link to="/auth/reset-email">Parolingizni unutdingizmi?</Link>
							</Title>

							<Button
								loading={loading}
								type="submit"
								sx={{
									borderRadius: '5px',
									color: 'rgba(0, 106, 255, 1)',
									height: '50px',
									backgroundColor: 'rgba(231, 240, 255, 1)',
									fontSize: '20px'
								}}>
								{loading ? 'Loading...' : 'Tizimga kirish'}
							</Button>
							<Text
								size="15px"
								color="rgba(17, 17, 17, 0.36)"
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									gap: '10px',
									'&:hover': {
										color: 'white'
									}
								}}>
								Akkauntingiz yo’qmi? unda <Link to="/auth/register">ro’yxatdan o’ting!</Link>
							</Text>
						</Flex>
					</Flex>
				</Paper>
			</form>
			<div className="left">
				<img src={threeD} alt="threeD" />
			</div>
		</Box>
	);
}

export default Login;
