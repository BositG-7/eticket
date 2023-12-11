import { Link } from 'react-router-dom';

import "./link.scss"

const LinkButton = () => {
	const i = 0;

	return (
		<div className="d-flex align-items-center link">
			<Link to="https://t.me/jd_answer_bot" target="_blank">
				<div className="svg_wrapper">
					<img src="https://eticket.railway.uz/assets/img/svg/telegram.svg" alt="Call" />
				</div>
				<div className="check_text"> @jd_answer_bot </div>
			</Link>
		</div>
	);
};

export default LinkButton;
