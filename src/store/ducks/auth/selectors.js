export const getToken = (state) => state.auth.token;
export const getUser = (state) => state.auth.user;
export const getLoading = (state) => state.auth.loading;
export const getCondominium = (state) => state.auth.condominium;

export default {
	getToken,
	getUser,
	getLoading,
	getCondominium,
};
