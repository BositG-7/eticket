import './trains-list.scss';

interface TrainsListProps {
	disabled: boolean;
	selected: boolean;
	soldOnlyPayOffice: boolean;
	timeDep: string;
	depStation: string;
	haltTime: string;
	timeArr: string;
	arrStation: string;
	trainBrand: string;
	trainNumber: string;
	trainNumberSpanText: string;
	trainStation: string;
	trainSold: string;
	trainTypes: {
		trainType: string;
		trainSeatAmount: string;
		trainSeatTarif: string;
	}[];
}

const TrainsList = ({
	disabled,
	selected,
	soldOnlyPayOffice,
	timeDep,
	depStation,
	haltTime,
	timeArr,
	arrStation,
	trainBrand,
	trainNumber,
	trainNumberSpanText,
	trainStation,
	trainSold,
	trainTypes
}: TrainsListProps) => {
	const i = 0;
	const [{ trainType, trainSeatAmount, trainSeatTarif }] = trainTypes;

	return (
		<>
			<div className={`trains__list mb-4 ${disabled ? 'direction__item--disabled' : ''} ${selected ? 'direction__item--selected' : ''}`}>
				<div className="trains__items">
					<div className="time">
						<div className="d-flex flex-column">
							<div className="time_dep">{timeDep}</div>

							<div className="dep_station">{depStation}</div>
						</div>
						<div className="w-100 halt_time--wrapper">
							<div className="desktop_svg">
								<img src="https://eticket.railway.uz/uz/assets/img/train-page/desktop_arrow.svg" alt="mobile arrow" className="w-100" />
							</div>

							<div className="halt_time">{haltTime}</div>
						</div>
						<div className="d-flex flex-column">
							<div className="time_arr">{timeArr}</div>
							<div className="arr_station text-right">{arrStation}</div>
						</div>
					</div>

					<div className="train_info">
						<div className="train_info_detail">
							<div className={`train_brand ${disabled ? 'disabled_brand' : ''}`}>{trainBrand}</div>

							<div className={`train_number ${disabled ? 'disabled_number' : ''}`}>
								{trainNumber} <span>({trainNumberSpanText})</span>
							</div>
						</div>

						<div className="train_station">{trainStation}</div>
					</div>

					{disabled ? (
						<div className="d-flex flex-column car_type_invisible" />
					) : (
						<>
							<div className="car_type_visible">
								{trainTypes.map(({ trainType, trainSeatAmount, trainSeatTarif }) => (
									<div key={trainSeatTarif} className="train_seat my-1">
										<div className="train_type" title={trainType}>
											{trainType}
										</div>

										<div className="train_seat_amount">{trainSeatAmount}</div>
										<div className="train_seat_tarif">
											<b>{trainSeatTarif} </b>
											<span className="train_seat_som">so'm</span>
										</div>
									</div>
								))}
							</div>
						</>
					)}

					<div className="info__item">
						{selected ? (
							<button className="train-sold select_train selected">Boshqa poyezd tanlash</button>
						) : (
							<button
								className={`train-sold select_train ${disabled ? 'disabled_btn' : ''} ${soldOnlyPayOffice ? 'only_pay_disabled_btn' : ''}`}>
								{trainSold}
							</button>
						)}
					</div>

					{/* end */}
				</div>
			</div>
		</>
	);
};

export default TrainsList;
