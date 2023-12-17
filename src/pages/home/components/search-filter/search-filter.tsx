import * as yup from 'yup';
import { Box, Button, Select } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm, yupResolver } from '@mantine/form';

import { viloyatlar } from './constants';

import './search-filter.scss';

const schema = yup.object({
	from: yup.string().label('from').required('qayerdan borishingizni belgilang'),
	to: yup.string().label('to').required('qayerga borishingizni belgilang'),
	designatedTime: yup.string().label('time').required('ketish vaqtingizni belgilang')
});

const SearchFilter = () => {
	const { getInputProps, onSubmit } = useForm({
		initialValues: { from: '', to: '', designatedTime: '' },
		validate: yupResolver(schema)
	});

	const SearchedFlight = async (value: any) => {
		try {
			console.log('search-filter value =>', value);
		} catch (err: any) {
			console.log('error =>', err);
		}
	};

	return (
		<>
			<Box className="search__input--wrapper">
				<form onSubmit={onSubmit(SearchedFlight)} className="search_card">
					<Box className="search_input_wrapper">
						<div className="search_input_wrapper_icon">
							<img src="https://eticket.railway.uz/uz/assets/img/svg/destination.svg" alt="asset" />
						</div>
						<Select {...getInputProps('from')} variant="filled" placeholder="Qayerdan" data={viloyatlar} searchable />
					</Box>

					<Box className="search_input_change">
						<img src="https://eticket.railway.uz/uz/assets/img/svg/change.svg" alt="asset" />
					</Box>

					<Box className="search_input_wrapper">
						<div className="search_input_wrapper_icon">
							<img src="https://eticket.railway.uz/uz/assets/img/svg/destination.svg" alt="asset" />
						</div>
						<Select {...getInputProps('to')} variant="filled" placeholder="Qayerga" data={viloyatlar} searchable />
					</Box>

					<Box className="datepicker">
						<div className="datepicker__modal">
							<img src="https://eticket.railway.uz/assets/img/svg/calendar.svg" alt="calendar icon" className="datepicker__icon" />
						</div>

						<DateInput {...getInputProps('designatedTime')} className="datepicker__input" variant="filled" placeholder="Input placeholder" />
					</Box>

					<Button type="submit" className="search_input_submit">
						<img src="https://eticket.railway.uz/uz/assets/img/svg/search.svg" alt="search" />
					</Button>
				</form>
			</Box>
		</>
	);
};

export default SearchFilter;
