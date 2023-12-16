import './process-item.scss';

interface ProcessItemProps {
	active: boolean;
	text: string;
}

const ProcessItem = ({ active, text }: ProcessItemProps) => {
	const i = 0;

	return (
		<>
			<div className={`process__item ${active ? 'active' : ''}`}>
				<div className="process--icon">
					<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
						<path
							d="M13.6423 4.9407C14.0306 4.47797 13.9703 3.78808 13.5075 3.39979C13.0448 3.01151 12.3549 3.07187 11.9666 3.53461L6.64354 9.87841L3.89056 7.56839C3.42782 7.18011 2.73794 7.24047 2.34965 7.70321C1.96137 8.16594 2.02173 8.85583 2.48446 9.24412L6.0753 12.2572C6.53804 12.6455 7.22792 12.5851 7.61621 12.1224L13.6423 4.9407Z"
							fill={active ? '#01c3a7' : '#fff'}
							stroke={active ? '#01c3a7' : '#fff'}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
				<div className="process--text">{text}</div>
			</div>
		</>
	);
};

export default ProcessItem;
