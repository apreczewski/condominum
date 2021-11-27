import api from './api';

export const login = (user) => api.get('login', { auth: user });

export const registerUser = (data) => api.post('post_usuario', data);

export const loginApp = (user) => api.get('loginapp', { auth: user });

export const changePassword = (data) => api.put('put_senha', data);

export const changeUser = (data) => api.put('put_usuario', data);
