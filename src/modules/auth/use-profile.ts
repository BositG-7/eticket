import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { clearSession, getSession } from 'services/store';

import { Api, Types } from '.';

interface State {
	isLoading: boolean;
	user: Types.IEntity.User | null;
}

const useProfile = (): [State, Dispatch<SetStateAction<State>>] => {
	const { accessToken } = getSession();
	const { refreshToken } = getSession();
	const [state, setState] = React.useState<State>({ isLoading: !!accessToken, user: null });

	useEffect(() => {
		const request = async () => {
			try {
				const { data } = await Api.Profile();

				console.log(data);

				setState({ user: data, isLoading: false });
			} catch (err: any) {
				clearSession();
				console.log(err);

				setState({ user: null, isLoading: false });
			}
		};

		if (accessToken) request();
	}, []);

	return [state, setState];
};

export default useProfile;
