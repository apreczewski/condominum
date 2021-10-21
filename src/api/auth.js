import api from './api';

export const login = (user) => api.get('login', { auth: user });

export const registerUser = (data) => api.post('post_usuario', data);

export const loginApp = (user) => api.get('loginapp', { auth: user });
