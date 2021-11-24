import api from './api';

export const getHelp = () => api.get('get_ajudalista');

export const getTerms = () => api.get('get_termolista');
