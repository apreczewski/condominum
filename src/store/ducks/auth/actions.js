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

export const setToken = (token) => ({
	type: types.SET_TOKEN,
	token,
});

export const resetUser = () => ({
	type: types.RESET_USER,
});

export const checkUser = () => ({
	type: types.CHECK_USER,
});

export const setLoading = () => ({
	type: types.SET_LOADING,
});

export const setCondo = (condominium) => ({
	type: types.SET_CONDO,
	condominium,
});

export default {
	loginUserAction,
	logout,
	setUser,
	setToken,
	resetUser,
	checkUser,
	setLoading,
	setCondo,
};
