import * as types from './types';

export const putForgotPassword = (email) => ({
	type: types.PUT_FORGOTPASSWORD,
	email,
});

export default {
	putForgotPassword,
};
