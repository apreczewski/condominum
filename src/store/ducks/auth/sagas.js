import { put, takeLatest, call, select } from 'redux-saga/effects';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as actions from './actions';
import * as auth from '../../../api/auth';
import api from '../../../api/api';
import * as types from './types';
import * as selectors from './selectors';
import * as RootNavigation from '../../../lib/utils/navigation';

export function* login(payload) {
	yield put(actions.setLoading());

	const { user } = payload;

	try {
		const response = yield call(auth.login, user);

		if (response.data.login) {
			const dataUser = {
				name: response.data.login.name,
				social_name: response.data.login.social_name,
			};

			const dataCondo = response.data.login.condominium_id;

			const dataToken = response.data.login.token;

			api.defaults.headers.common['x-access-token'] = dataToken;

			yield put(actions.setUser(dataUser));

			yield put(actions.setCondo(dataCondo));

			AsyncStorage.setItem('userData', JSON.stringify(dataUser));

			AsyncStorage.setItem('userCondominium', JSON.stringify(dataCondo));

			AsyncStorage.setItem('userToken', JSON.stringify(dataToken));

			yield put(actions.setToken(dataToken));
		} else {
			Toast.show({
				text1: response.data.mensagem.mensagem,
				type: 'error',
			});
		}
	} catch (error) {
		Toast.show({
			text1: 'Erro ao realizar o login tente novamente!',
			type: 'error',
		});
	}

	yield put(actions.setLoading());
}

async function getToken() {
	const tokenFromStorage = await AsyncStorage.getItem('userToken');

	return tokenFromStorage;
}

async function getUserData() {
	const user = await AsyncStorage.getItem('userData');

	return user;
}

async function getUserCondo() {
	const user = await AsyncStorage.getItem('userCondominium');

	return user;
}

export function* checkUser() {
	const token = yield select(selectors.getToken);

	if (token) {
		RootNavigation.navigate('Main');
	} else {
		let tokenFromStorage = yield call(getToken);

		if (tokenFromStorage !== null) {
			let userData = yield call(getUserData);
			userData = JSON.parse(userData);
			yield put(actions.setUser(userData));

			let userCondo = yield call(getUserCondo);
			userCondo = JSON.parse(userCondo);
			yield put(actions.setCondo(userCondo));

			tokenFromStorage = JSON.parse(tokenFromStorage);

			api.defaults.headers.common['x-access-token'] = tokenFromStorage;

			yield put(actions.setToken(tokenFromStorage));

			RootNavigation.navigate('Main');
		} else {
			RootNavigation.navigate('Auth');
		}
	}
}

export function* logout() {
	yield put(actions.resetUser());
	AsyncStorage.removeItem('userData');
	AsyncStorage.removeItem('userCondominium');
	AsyncStorage.removeItem('userToken');
}

export default function* watchUserAuthentication() {
	yield takeLatest(types.LOGIN_USER, login);
	yield takeLatest(types.CHECK_USER, checkUser);
	yield takeLatest(types.LOGOUT, logout);
}
