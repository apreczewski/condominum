import axios from 'axios';
import Toast from 'react-native-root-toast';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../lib/constants/colors';
import { BASE_API } from '../config/environment';

const api = axios.create({
	baseURL: BASE_API,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
	timeout: 1500,
});

const getToken = async () => {
	const userToken =
		'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiIwYTZmYTZkZi05MTUwLTQ3ZDMtYTQ0ZC00Njg3MzI4MWExMzgiLCJleHAiOjE2Njk5MTM0MDh9.HnQhal-wdj1nie9BCCuzqgkxc3Jf-ptt5jZ1NK3qQSQ';
	// let userToken = await AsyncStorage.getItem('userToken');
	// userToken = JSON.parse(userToken);

	if (userToken) {
		api.defaults.headers.common['x-access-token'] = `${userToken}`;
	}
};

getToken();

api.interceptors.response.use(
	(response) => {
		if (
			response.data.status &&
			response.data.status.mensagem === 'Token invalido.'
		) {
			Toast.show('Token inválido faça logout do usuário!', {
				duration: Toast.durations.SHORT,
				position: Toast.positions.BOTTOM,
				animation: true,
				hideOnPress: true,
				backgroundColor: Colors.error,
			});
		}
		return response;
	},
	async (error) => {
		const { response, code } = error;

		if (response.status === 408 || code === 'ECONNABORTED') {
			// Toast.show('Sem conexão!', {
			// 	duration: Toast.durations.SHORT,
			// 	position: Toast.positions.BOTTOM,
			// 	animation: true,
			// 	hideOnPress: true,
			// 	backgroundColor: Colors.error,
			// });
		}

		if (response.status !== 401) {
			return Promise.reject(error);
		}

		return false;
	},
);

export default api;
