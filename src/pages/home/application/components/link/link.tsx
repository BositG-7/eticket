import { Link } from 'react-router-dom';

import './link.scss';

export interface LinkButtonProps {
	url: string;
	text: string;
}

const LinkButton = ({ url, text }: LinkButtonProps) => {
	const i = 0;

	return (
		<div className="d-flex align-items-center link">
			<Link to="https://t.me/jd_answer_bot" target="_blank">
				<div className="svg_wrapper">
					<img src={url} alt="Call" />
				</div>
				<div className="check_text"> {text} </div>
			</Link>
		</div>
	);
};

export default LinkButton;
