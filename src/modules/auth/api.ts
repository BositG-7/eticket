import http from 'services/http';
import { objectToFormData } from 'utils';

import { IApi } from './types';

export const Register = ({ ...params }: IApi.Register.Request) => http.post<IApi.Register.Response>('/api/v1/user/sign-up', { ...params });

export const Login = ({ ...params }: IApi.Login.Request | IApi.Login2.Request) =>
	http.post<IApi.Login.Response>('/api/v1/user/sign-in', { ...params });
export const Profile = () => http.get('/user/me');
export const Checkpassword = ({ email, code }: IApi.Checkpassword.Request) => http.post('/api/v1/user/verify', { email, code });
export const ResetEmaill = ({ ...params }: IApi.ResetEmail.Request) => http.post('/user/api/reset-password/', objectToFormData({ ...params }));
export const ResetPassword = ({ ...params }: IApi.ResetPassword.Request) =>
	http.post('/user/api/reset-password-confirm/', objectToFormData({ ...params }));

export const DeleteUser = () => http.delete('/user/me');
