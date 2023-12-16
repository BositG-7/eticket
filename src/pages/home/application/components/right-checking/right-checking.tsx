import { useState } from 'react';
import * as yup from 'yup';
import { Input } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';

import './right-checking.scss';

const schema = yup.object({
	check: yup.string().required('chiptani kiriting')
});

const RightChecking = () => {
	const [value, setValue] = useState('');

	const { getInputProps, onSubmit } = useForm({
		initialValues: { check: '' },
		validate: yupResolver(schema)
	});

	const CheckTicket = async (value: any) => {
		try {
			console.log('check-ticket value =>', value);
		} catch (err: any) {
			console.log('error =>', err);
		}
	};

	return (
		<div className="check_ticket_input w-100">
			<div>
				<h3>Chiptaning haqiqiyligini tekshiring</h3>
			</div>
			<div className="check_warning">
				<div>
					<svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M15.949 15.7485H2.0493C1.78135 15.7485 1.53376 15.6055 1.39979 15.3735C1.26582 15.1414 1.26582 14.8555 1.3998 14.6235L8.3493 2.62346C8.48337 2.3918 8.73075 2.24915 8.99842 2.24915C9.26609 2.24915 9.51347 2.3918 9.64755 2.62346L16.597 14.6235C16.731 14.8554 16.731 15.1411 16.5972 15.3731C16.4635 15.6051 16.2161 15.7482 15.9483 15.7485H15.949ZM8.99955 4.49846L3.3513 14.2485H14.6493L8.99955 4.49846ZM9.7458 11.2492H8.2458V7.49846H9.7458V11.2492Z"
							fill="#F55151"
						/>
						<path d="M8.24955 12H9.74955V13.5H8.24955V12Z" fill="#F55151" />
					</svg>
				</div>
				<p>
					DIQQAT! Hurmatli foydalanuvchilar!!! Tekshiruv chog‘ida qalbaki yoki egasi bo‘lmagan chipta bilan aniqlangan yo‘lovchi poyezdga
					chiqishga ruxsat etilmaydi va u ma’muriy va jinoiy javobgarlikka tortilishi mumkin. Diqqatli bo'ling!
				</p>
			</div>
			<div className="check_ticket_input_item w-100">
				<form onSubmit={onSubmit(CheckTicket)} className="ng-untouched ng-pristine ng-invalid">
					<div className="check_input_wrapper w-100">
						<div className="svg">
							<svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M2 7.5C2 5.84315 3.34315 4.5 5 4.5H19C20.6569 4.5 22 5.84315 22 7.5V10.5C22 11.0523 21.5523 11.5 21 11.5C20.4477 11.5 20 11.9477 20 12.5C20 13.0523 20.4477 13.5 21 13.5C21.5523 13.5 22 13.9477 22 14.5V17.5C22 19.1569 20.6569 20.5 19 20.5H5C3.34315 20.5 2 19.1569 2 17.5V14.5C2 13.9477 2.44772 13.5 3 13.5C3.55229 13.5 4 13.0523 4 12.5C4 11.9477 3.55229 11.5 3 11.5C2.44772 11.5 2 11.0523 2 10.5V7.5ZM16 18.5V17.5C16 16.9477 15.5523 16.5 15 16.5C14.4477 16.5 14 16.9477 14 17.5V18.5H5C4.44771 18.5 4 18.0523 4 17.5V15.3293C5.16519 14.9175 6 13.8062 6 12.5C6 11.1938 5.16519 10.0825 4 9.6707V7.5C4 6.94771 4.44771 6.5 5 6.5H14V7.5C14 8.05228 14.4477 8.5 15 8.5C15.5523 8.5 16 8.05228 16 7.5V6.5H19C19.5523 6.5 20 6.94771 20 7.5V9.6707C18.8348 10.0825 18 11.1938 18 12.5C18 13.8062 18.8348 14.9175 20 15.3293V17.5C20 18.0523 19.5523 18.5 19 18.5H16ZM15 10.5C15.5523 10.5 16 10.9477 16 11.5V13.5C16 14.0523 15.5523 14.5 15 14.5C14.4477 14.5 14 14.0523 14 13.5V11.5C14 10.9477 14.4477 10.5 15 10.5Z"
									fill="#01C3A7"
								/>
							</svg>
						</div>
						<div className="w-100">
							<Input {...getInputProps('check')} placeholder="Elektron chipta (raqam)" mt="md" />
							<div className="remove" onClick={() => getInputProps('')}>
								<svg width="23" height="24" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M8 12.5L10 10.5M10 10.5L12 8.5M10 10.5L8 8.5M10 10.5L12 12.5M19 10.5C19 15.4706 14.9706 19.5 10 19.5C5.02944 19.5 1 15.4706 1 10.5C1 5.52944 5.02944 1.5 10 1.5C14.9706 1.5 19 5.52944 19 10.5Z"
										stroke="#D2D8EB"
									/>
								</svg>
							</div>
						</div>
					</div>
					<button type="submit" className="check_btn w-100 mt-3">
						Yuborish
					</button>
				</form>
			</div>
		</div>
	);
};

export default RightChecking;
