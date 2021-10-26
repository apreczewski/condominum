import api from './api';

export const getPublications = () => api.get('get_publicacaolista');

export const getPublication = (id) =>
	api.get(`get_publicacao?idpublicacao=${id}`);

export const putLike = ({ id, status }) =>
	api.put(`put_curtida?idpublicacao=${id}&statusnovocurtida=${status}`);

/* `put_curtida?idpublicacao=${id}&statusnovocurtida=${status}` */
