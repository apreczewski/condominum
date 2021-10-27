import api from './api';

export const getCondominium = () => api.get('get_condominio');

export const putCondominium = ({ id }) =>
	api.put(`put_condominiopreferencial?idcondominio=${id}`);
