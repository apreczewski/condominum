import { call, put, takeLatest } from 'redux-saga/effects';
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

export default function* watchPublications() {
	yield takeLatest(types.GET_LIST, getList);
}
