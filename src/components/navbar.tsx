import React, { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, Menu } from '@mantine/core';
import { IconLogout, IconMenu, IconSettings, IconUser } from '@tabler/icons-react';
import { useAuth } from 'modules/auth/context';

import './navbar.css';

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
	const navigate = useNavigate();
	const { user, methods } = useAuth();

	return (
		<>
			{window.location.pathname.split('/')[1] === 'auth' ? (
				<></>
			) : (
				<Box
					p="0px 100px"
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						height: '100px'
					}}
					className="navbar">
					<Box
						className="nav"
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							gap: '30px',
							padding: '24px',
							color: 'rgba(17, 17, 17, 0.54)', // rgba ni string sifatida ko'rsating
							fontFamily: 'Gilroy',

							fontStyle: 'normal',
							fontWeight: 500,
							lineHeight: 'normal'
						}}>
						<Button
							sx={{
								background: 'none',
								color: 'black',
								':hover': {
									background: 'none', // O'zgarishi mumkin
									color: 'blue' // O'zgarishi mumkin
								}
							}}
							className="title"
							// @ts-ignore

							size={14}
							onClick={() => {
								navigate('/');
							}}>
							Bosh sahifa
						</Button>
						<Button
							onClick={() => {
								navigate('/courses');
							}}
							sx={{
								background: 'none',
								color: 'black',
								':hover': {
									background: 'none', // O'zgarishi mumkin
									color: 'blue' // O'zgarishi mumkin
								}
							}}
							className="title"
							// @ts-ignore
							size={14}>
							Kurslar
						</Button>
						<Button
							onClick={() => {
								navigate('/question');
							}}
							className="title"
							// @ts-ignore

							size={14}
							sx={{
								background: 'none',
								color: 'black',
								':hover': {
									background: 'none', // O'zgarishi mumkin
									color: 'blue' // O'zgarishi mumkin
								}
							}}>
							FAQ
						</Button>
						<Button
							className="title"
							sx={{
								background: 'none',
								color: 'black',
								':hover': {
									background: 'none', // O'zgarishi mumkin
									color: 'blue' // O'zgarishi mumkin
								}
							}}
							onClick={() => {
								navigate('/about');
							}}
							// @ts-ignore

							size={14}>
							Biz haqimizda
						</Button>
					</Box>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							gap: '30px'
						}}
						className="loginn">
						{user ? (
							<Menu shadow="md" width="max-content" position="bottom-end">
								<Menu.Target>
									<Avatar
										sx={{ cursor: 'pointer' }}
										radius="xl"
										alt="it's me"
										size="lg"
										{...(user?.img ? { src: user.img } : { children: user?.username[0]?.toUpperCase() })}
									/>
								</Menu.Target>
								<Menu.Dropdown>
									<Menu.Label sx={{ fontSize: 15 }} color="lime">
										Hi 👋🏻 {user?.email}
									</Menu.Label>
									<Menu.Divider />

									<Menu.Item
										icon={<IconUser size={14} />}
										onClick={() => {
											navigate('/dashboard');
										}}>
										Profile
									</Menu.Item>
									<Menu.Item onClick={methods.logout} color="red" icon={<IconLogout size={14} />}>
										Logout
									</Menu.Item>
								</Menu.Dropdown>
							</Menu>
						) : (
							<Button
								variant="light"
								onClick={() => {
									navigate('/auth/login');
								}}>
								Kirish
							</Button>
						)}
					</Box>
					<Box
						className="menu"
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							gap: '30px'
						}}>
						{user ? (
							<Menu shadow="md" width="max-content" position="bottom-end">
								<Menu.Target>
									<Avatar sx={{ cursor: 'pointer' }} radius="sm" alt="it's me" size="sm" children={<IconMenu />} />
								</Menu.Target>
								<Menu.Dropdown>
									<Menu.Divider />
									<Menu.Item
										icon={<IconUser size={14} />}
										onClick={() => {
											navigate('/dashboard');
										}}>
										Profile
									</Menu.Item>

									<Menu.Item onClick={methods.logout} color="red" icon={<IconLogout size={10} />}>
										Logout
									</Menu.Item>
								</Menu.Dropdown>
							</Menu>
						) : (
							<Menu shadow="sm" width="max-content" position="bottom-end">
								<Menu.Target>
									<Avatar sx={{ cursor: 'pointer' }} radius="xl" alt="it's me" size="sm" children={<IconMenu />} />
								</Menu.Target>
								<Menu.Dropdown>
									<Menu.Divider />
									<Menu.Item
										onClick={() => {
											navigate('/auth');
										}}
										icon={<IconSettings size={10} />}>
										Kirish
									</Menu.Item>
								</Menu.Dropdown>
							</Menu>
						)}
					</Box>
				</Box>
			)}
		</>
	);
};

export default Navbar;
