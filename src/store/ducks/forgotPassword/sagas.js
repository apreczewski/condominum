import { call, put, takeLatest } from 'redux-saga/effects';
import Toast from 'react-native-toast-message';

import * as forgotPassword from '../../../api/forgotPassword';
import * as types from './types';
import { apiActions } from '../api';
import { showToast } from '../../../lib/utils/funcitons';

export function* putForgotPassword(email) {
	yield put(apiActions.apiStart());

	try {
		const response = yield call(forgotPassword.putForgotPassword, email);

		if (response.data) {
			Toast.show({
				text1: response.data.mensagem.mensagem,
				type: 'info',
			});
		}
	} catch (error) {
		showToast('error', 'Erro ao buscar notificações');
	}

	yield put(apiActions.apiEnd());
}

export default function* watchPublications() {
	yield takeLatest(types.PUT_FORGOTPASSWORD, putForgotPassword);
}
