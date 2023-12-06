import { Navigate, Outlet, useNavigate } from 'react-router-dom';

import style from '../pages/dashboard/user/styles/panel.module.scss';

interface AdminRouteProps {
	allowed: boolean;
	redirectURL?: string;
}

const AdminRoute = ({ allowed = false, redirectURL = '/' }: AdminRouteProps) => {
	const navigate = useNavigate();

	if (allowed)
		return (
			<>
				<div className={style.userPanel}>
					<div className={style.main}>
						<Outlet />
					</div>
				</div>
			</>
		);

	return <Navigate to={redirectURL} />;
};

export default AdminRoute;
