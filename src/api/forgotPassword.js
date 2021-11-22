import api from './api';

export const putForgotPassword = ({ email }) =>
	api.put(`put_esquecisenha?email=${email}`);
