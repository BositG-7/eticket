import { FunctionComponent } from 'react';
import { Box } from '@mantine/core';

import { SearchFilter } from '../components';

import { ProcessItem, TrainsList, TrainsNavbar } from './components';

import './trains.scss';

interface TrainsProps {}

const Trains: FunctionComponent<TrainsProps> = () => {
	const i = 0;

	return (
		<>
			{/* section 1 ---- app-navbar */}
			<TrainsNavbar />

			{/* section 2 ---- app-process-guide */}
			<section>
				<div className="my-container">
					<div className="process__items">
						<ProcessItem active={true} text="Poyezdni tanlash" />
						<ProcessItem active={false} text="Vagon va joy tanlash" />
						<ProcessItem active={false} text="Yo’lovchi ma’lumotlari" />
						<ProcessItem active={false} text="Buyurtmani tasdiqlash" />
						<ProcessItem active={false} text="To'lov" />
					</div>
				</div>
			</section>

			{/* section 3 ----  */}
			<Box sx={{ display: 'grid', placeItems: 'center', marginTop: '95px', marginBottom: '30px' }}>
				<SearchFilter />
			</Box>

			{/* section 4  */}
			<section>
				<div className="train_direction">
					{/* train-header */}
					<div className="train_header">
						<h5 className="train__dep_time">14 dekabr, payshanba</h5>
						<p className="train__arr_station">
							<span className="arr_station--name">URGENCHga </span>
							boradigan poyezdlar
						</p>
					</div>

					{/* train_change--dates */}
					<div className="train_change--dates">
						<ul className="close-dates">
							<li className="close-dates__item selected">Shan 16 dek</li>
							<li className="close-dates__item">Yak 17 dek</li>
							<li className="close-dates__item">Dush 18 dek</li>
							<li className="close-dates__item">Sesh 19 dek</li>
							<li className="close-dates__item">Chor 20 dek</li>
							<li className="close-dates__item">Pay 21 dek</li>
							<li className="close-dates__item">Jum 22 dek</li>
							<li className="close-dates__item">Shan 23 dek</li>
						</ul>
					</div>

					{/* train_time_info */}
					<div className="train_time_info mb-2 mb-md-4">
						<div>
							<img src="https://eticket.railway.uz/uz/assets/img/train-page/time.svg" alt="" />
						</div>
						<p>Mahalliy ketish va kelish vaqtlari</p>
					</div>

					{/* trains__list */}
					<TrainsList
						disabled={false}
						selected={true}
						soldOnlyPayOffice={false}
						timeDep="21:43"
						depStation="SAMARQAND"
						haltTime="01:43"
						timeArr="23:26"
						arrStation="BUXORO"
						trainBrand="Afrosiyob"
						trainNumber="772Ф"
						trainNumberSpanText="СКРСТ"
						trainStation="Toshkent → Buxoro"
						trainTypes={[{ trainType: "O'rindiqli", trainSeatAmount: '8', trainSeatTarif: '168000' }]}
						trainSold="Poyezdni tanlash"
					/>
					<TrainsList
						disabled={false}
						selected={false}
						soldOnlyPayOffice={false}
						timeDep="23:04"
						depStation="SAMARQAND"
						haltTime="02:43"
						timeArr="01:47"
						arrStation="BUXORO"
						trainBrand="Sharq"
						trainNumber="012Ф"
						trainNumberSpanText="СК"
						trainStation="Toshkent → Buxoro"
						trainTypes={[
							{ trainType: "O'rindiqli", trainSeatAmount: '53', trainSeatTarif: '97930' },
							{ trainType: 'Plaskartli', trainSeatAmount: '9', trainSeatTarif: '153270' },
							{ trainType: 'Kupe', trainSeatAmount: '3', trainSeatTarif: '205430' },
							{ trainType: 'SV', trainSeatAmount: '2', trainSeatTarif: '352340' }
						]}
						trainSold="Poyezdni tanlash"
					/>
					<TrainsList
						disabled={false}
						selected={false}
						soldOnlyPayOffice={false}
						timeDep="23:04"
						depStation="SAMARQAND"
						haltTime="02:43"
						timeArr="01:47"
						arrStation="BUXORO"
						trainBrand="Sharq"
						trainNumber="012Ф"
						trainNumberSpanText="СК"
						trainStation="Toshkent → Buxoro"
						trainTypes={[{ trainType: "O'rindiqli", trainSeatAmount: '53', trainSeatTarif: '97930' }]}
						trainSold="Poyezdni tanlash"
					/>
					<TrainsList
						disabled={false}
						selected={false}
						soldOnlyPayOffice={true}
						timeDep="18:36"
						depStation="SAMARQAND"
						haltTime="03:02"
						timeArr="21:38"
						arrStation="BUXORO"
						trainBrand="скорый"
						trainNumber="054Ф"
						trainNumberSpanText="СК"
						trainStation="Toshkent janubiy → Qung`irot"
						trainTypes={[{ trainType: 'SV', trainSeatAmount: '6', trainSeatTarif: '252000' }]}
						trainSold="Faqat kassada sotiladi"
					/>
					<TrainsList
						disabled={true}
						selected={false}
						soldOnlyPayOffice={false}
						timeDep="21:51"
						depStation="SAMARQAND"
						haltTime="03:02"
						timeArr="00:53"
						arrStation="BUXORO"
						trainBrand="Пассажирский"
						trainNumber="125Ф"
						trainNumberSpanText="СК"
						trainStation="Andijon → Xiva"
						trainTypes={[{ trainType: 'SV', trainSeatAmount: '6', trainSeatTarif: '252000' }]}
						trainSold="Joylar qolmagan"
					/>

					{/* end */}
				</div>
			</section>
		</>
	);
};

export default Trains;
