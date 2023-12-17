import { Navigate, Route, Routes as Switch } from 'react-router-dom';
import { useAuth } from 'modules/auth/context';
import { Auth, Home } from 'pages';

import AuthProtected from './auth-protected';

const Routes = () => {
	const { user } = useAuth();

	console.log('user =>', user);

	return (
		<Switch>
			<Route path="auth" element={<AuthProtected allowed={!user} redirectURL="/" />}>
				<Route path="login" element={<Auth.Login />} />
				<Route path="register" element={<Auth.Register />} />
				<Route path="reset-password" element={<Auth.Reset.ResetEmail />} />

				<Route path="*" index element={<Navigate to="/auth/login" />} />
			</Route>

			<Route path="" element={<Home.Application.Application />} />
			<Route path="trains-page" element={<Home.Trains.Trains />} />

			<Route path="*" element={<Navigate to={user ? '/dashboard' : '/auth/login'} />} />
		</Switch>
	);
};

export default Routes;
