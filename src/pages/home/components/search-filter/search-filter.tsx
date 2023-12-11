import { Box, Select } from '@mantine/core';
import { DateInput } from '@mantine/dates';

import { viloyatlar } from './constants';

import './search-filter.scss';

const SearchFilter = () => (
	<>
		<Box className='search__input--wrapper'>
			<form className="search_card">
				<Box className="search_input_wrapper">
					<div className="search_input_wrapper_icon">
						<img src="https://eticket.railway.uz/uz/assets/img/svg/destination.svg" alt="asset" />
					</div>
					<Select variant="filled" placeholder="Qayerdan" data={viloyatlar} searchable />
				</Box>

				<Box className="search_input_change">
					<img src="https://eticket.railway.uz/uz/assets/img/svg/change.svg" alt="asset" />
				</Box>

				<Box className="search_input_wrapper">
					<div className="search_input_wrapper_icon">
						<img src="https://eticket.railway.uz/uz/assets/img/svg/destination.svg" alt="asset" />
					</div>
					<Select variant="filled" placeholder="Qayerga" data={viloyatlar} searchable />
				</Box>

				<Box className="datepicker">
					<div className="datepicker__modal">
						<img src="https://eticket.railway.uz/assets/img/svg/calendar.svg" alt="calendar icon" className="datepicker__icon" />
					</div>

					<DateInput className="datepicker__input" variant="filled" placeholder="Input placeholder" />
				</Box>

				<button className="search_input_submit">
					<img src="https://eticket.railway.uz/uz/assets/img/svg/search.svg" alt="search" />
				</button>
			</form>
		</Box>
	</>
);

export default SearchFilter;
