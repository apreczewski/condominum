import { call, put, takeLatest } from 'redux-saga/effects';
import Toast from 'react-native-toast-message';

import * as condominium from '../../../api/condominium';
import * as types from './types';
import * as actions from './actions';
import { apiActions } from '../api';
import { showToast } from '../../../lib/utils/funcitons';

export function* getList() {
	yield put(apiActions.apiStart());

	try {
		const response = yield call(condominium.getCondominium);

		if (response.data) {
			yield put(actions.setList(response.data.condominio));
		}
	} catch (error) {
		showToast('error', 'Erro ao buscar condomínio');
	}

	yield put(apiActions.apiEnd());
}

export function* putItem(id) {
	yield put(apiActions.apiStart());

	try {
		const response = yield call(condominium.putCondominium, id);

		if (response.data) {
			Toast.show({
				text1: response.data.mensagem.mensagem,
				type: 'info',
			});
		}
	} catch (error) {
		showToast('error', `Erro ao buscar condomínio id: ${id}`);
	}

	yield put(apiActions.apiEnd());
}

export default function* watchCondominium() {
	yield takeLatest(types.GET_LIST, getList);
	yield takeLatest(types.PUT_ITEM, putItem);
}
