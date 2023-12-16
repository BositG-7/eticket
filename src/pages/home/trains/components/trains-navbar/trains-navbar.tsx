import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Box, Menu, Select } from '@mantine/core';
import { IconLogout, IconMenu, IconSettings, IconUser } from '@tabler/icons-react';
import { useAuth } from 'modules/auth/context';

import './trains-navbar.scss';

const TrainsNavbar = () => {
	const navigate = useNavigate();
	const { user, methods } = useAuth();
	const i = 0;

	return (
		<>
			<div className="site-header--fixed">
				<header className="site-header--white">
					<Box p="0px 80px" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100px' }} className="navbar">
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
							<Link to="/" className="site-logo_trains">
								<img src="https://eticket.railway.uz/assets/img/svg/logo.svg" alt="railway logo" className="site-logo__img_trains" />
								<span className="site-logo__text_trains">
									<span className="site-logo__bottom_trains">O’ZBEKISTON TEMIR YO’LLARI</span>
									<span className="site-logo__top_trains">AKSIYADORLIK JAMIYATI</span>
								</span>
							</Link>
						</Box>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								gap: '30px'
							}}
							className="loginn">
							{!true ? (
								<>
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
												{/* @ts-ignore */}
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
								</>
							) : (
								<>
									<Select
										defaultValue="uzb"
										styles={{
											rightSection: { display: 'none' },
											root: { width: '90px' },
											input: {
												background: 'rgb(89,97,134,000)',
												border: 'none',
												color: '#292b3f',
												width: '95px',
												padding: '0px',
												paddingLeft: '16px',
												fontSize: '17px'
											}
										}}
										data={[
											{ value: 'uzb', label: `O'zbek` },
											{ value: 'ru', label: 'Русский' },
											{ value: 'eng', label: 'English' }
										]}
									/>
									<Link className="site-nav__link" to="/uz/pages/schedule">
										<span className="site-nav__icon">
											<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346627 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C16 6.94942 15.7931 5.90914 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0V0ZM8 14.4C6.7342 14.4 5.49683 14.0246 4.44435 13.3214C3.39188 12.6182 2.57157 11.6186 2.08717 10.4492C1.60277 9.27972 1.47603 7.9929 1.72298 6.75142C1.96992 5.50994 2.57946 4.36957 3.47452 3.47452C4.36957 2.57946 5.50995 1.96992 6.75142 1.72297C7.9929 1.47603 9.27973 1.60277 10.4492 2.08717C11.6186 2.57157 12.6182 3.39187 13.3214 4.44435C14.0246 5.49682 14.4 6.7342 14.4 8C14.4 9.69738 13.7257 11.3252 12.5255 12.5255C11.3253 13.7257 9.69739 14.4 8 14.4V14.4ZM8 3.2C7.78783 3.2 7.58435 3.28428 7.43432 3.43431C7.28429 3.58434 7.2 3.78783 7.2 4V7.536L5.52 8.504C5.36589 8.59133 5.24512 8.72734 5.17663 8.8907C5.10814 9.05406 5.0958 9.23554 5.14156 9.40666C5.18731 9.57779 5.28857 9.72889 5.42945 9.83627C5.57033 9.94365 5.74287 10.0012 5.92 10C6.06014 10.001 6.19808 9.9651 6.32 9.896L8.4 8.696L8.472 8.624L8.6 8.52C8.63128 8.48039 8.65811 8.43747 8.68 8.392C8.70607 8.34905 8.72753 8.30346 8.744 8.256C8.76576 8.20513 8.77926 8.15112 8.784 8.096C8.784 8.096 8.8 8 8.8 8V4C8.8 3.78783 8.71572 3.58434 8.56569 3.43431C8.41566 3.28428 8.21217 3.2 8 3.2Z"
													fill="#292b3f"
												/>
											</svg>
										</span>
										<span style={{ color: '#292b3f', fontSize: '16px', fontWeight: 200, lineHeight: '20px' }} className="site-nav__text">
											Poyezdlar jadvali
										</span>
									</Link>
									<Link
										to="/home"
										className="site-nav__link"
										onClick={() => {
											navigate('/auth/login');
										}}>
										<span style={{ color: '#292b3f', fontSize: '16px', fontWeight: 200, lineHeight: '20px' }} className="site-nav__text">
											Kirish
										</span>
									</Link>
								</>
							)}
						</Box>

						{/* responsive */}
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
				</header>
			</div>
		</>
	);
};

export default TrainsNavbar;
