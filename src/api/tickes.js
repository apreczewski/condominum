import api from './api';

export const getTickes = () => api.get('get_boletolista');

export const getTicket = (id) => api.get(`get_boleto?idboleto=${id}`);
