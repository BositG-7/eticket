import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { getSession } from 'services/store';

import { Api, Mappers, Types } from '.';

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

				const user = Mappers.User(data);

				setState({ user, isLoading: false });
			} catch (err: any) {
				setState({ user: null, isLoading: false });
			}
		};

		if (accessToken) request();
	}, []);

	return [state, setState];
};

export default useProfile;
