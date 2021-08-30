import * as types from './types';

export const loginUserAction = (user) => ({
	type: types.LOGIN_USER,
	user,
});

export const logout = () => ({
	type: types.LOGOUT,
});

export const setUser = (user) => ({
	type: types.SET_USER_AUTH,
	user,
});

export default {
	loginUserAction,
	logout,
	setUser,
};
