import { FunctionComponent } from 'react';
import { Box } from '@mantine/core';

import Navbar from 'components/navbar';

import { SearchFilter } from '../components';

import { Footer, LeftApp, LinkButton, RightChecking } from './components';

import './application.scss';

interface ApplicationProps {}

const Application: FunctionComponent<ApplicationProps> = () => {
	const i = 0;

	return (
		<>
			{/* section 1 ----- main section */}
			<section className="home">
				<Navbar />

				<Box className="home_container">
					<div className="home_search">
						<div className="home_info">
							<h3 className="home_info--buy">Chipta xarid qilish</h3>
							<p className="home_info--content">Poyezd chiptasini xarid qilish uchun yo'nalish va sanani tanlang</p>
						</div>
					</div>
				</Box>

				<Box sx={{ display: 'grid', placeItems: 'center', marginTop: '168px' }}>
					<SearchFilter />
				</Box>
			</section>

			{/* section 2 ----- link section */}
			<section className="advertisement">
				<Box className="check_links">
					<LinkButton url="https://eticket.railway.uz/assets/img/svg/telegram.svg" text="@jd_answer_bot" />
					<LinkButton url="https://eticket.railway.uz/assets/img/svg/telegram.svg" text="Sun'iy Intellekt Bot Beta" />
					<LinkButton url="https://eticket.railway.uz/assets/img/svg/call.svg" text="Call-center: 1005" />
				</Box>
			</section>

			{/* section 3 ----- check section */}
			<section className="check">
				<div className="home_search">
					<div className="check_grid">
						<Box className="left">
							<LeftApp />
						</Box>

						<Box className="right">
							<RightChecking />
						</Box>
					</div>
				</div>
			</section>

			{/* section 4 ---- footer */}
			<Footer />
		</>
	);
};

export default Application;
