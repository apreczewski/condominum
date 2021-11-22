import api from './api';

export const getBalances = () => api.get('get_balancetelista');

export const getBalance = (id) => api.get(`get_balancete?idbalancete=${id}`);
