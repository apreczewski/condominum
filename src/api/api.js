import axios from 'axios';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_API } from '../config/environment';

const api = axios.create({
	baseURL: BASE_API,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
	timeout: 3000,
});

const getToken = async () => {
	let userToken = await AsyncStorage.getItem('userToken');
	userToken = JSON.parse(userToken);

	if (userToken) {
		api.defaults.headers.common['x-access-token'] = `${userToken}`;
	}
};

getToken();

api.interceptors.response.use(
	(response) => {
		if (
			response.data.mensagem &&
			response.data.mensagem.mensagem === 'Token invalido.'
		) {
			Toast.show({
				text1: 'Token inválido faça logout do usuário!',
				type: 'error',
			});
		}
		return response;
	},
	async (error) => {
		const { response, code } = error;

		if (response.status === 408 || code === 'ECONNABORTED') {
			Toast.show({
				text1: 'Sem conexão!',
				type: 'error',
			});
		}

		if (response.status !== 401) {
			return Promise.reject(error);
		}

		return false;
	},
);

export default api;
