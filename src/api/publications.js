import api from './api';

export const getPublications = () => api.get('get_publicacaolista');

export const putLike = (status, id) =>
	api.put(`put_curtida?idpublicacao=${id}&statusnovocurtida=${status}`);
