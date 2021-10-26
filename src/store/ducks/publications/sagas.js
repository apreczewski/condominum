import { call, put, takeLatest } from 'redux-saga/effects';
import Toast from 'react-native-toast-message';

import * as publications from '../../../api/publications';
import * as types from './types';
import * as actions from './actions';
import { apiActions } from '../api';
import { showToast } from '../../../lib/utils/funcitons';

export function* getList() {
	yield put(apiActions.apiStart());

	try {
		const response = yield call(publications.getPublications);

		if (response.data) {
			yield put(actions.setList(response.data.publicacao));
		}
	} catch (error) {
		showToast('error', 'Erro ao buscar notificações');
	}

	yield put(apiActions.apiEnd());
}

export function* getItem(payload) {
	const { id } = payload;

	yield put(apiActions.apiStart());

	try {
		const response = yield call(publications.getPublication, id);

		if (response.data) {
			yield put(actions.setItem(response.data.publicacao));
		}
	} catch (error) {
		showToast('error', `Erro ao buscar notificação id: ${id}`);
	}

	yield put(apiActions.apiEnd());
}

export function* putLike(id, status) {
	yield put(apiActions.apiStart());

	try {
		const response = yield call(publications.putLike, id, status);

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
	yield takeLatest(types.GET_LIST, getList);
	yield takeLatest(types.GET_ITEM, getItem);
	yield takeLatest(types.PUT_LIKE, putLike);
}
