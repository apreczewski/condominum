import api from './api';

export const login = (user) => api.get('login', { auth: user });
