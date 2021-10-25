import { call, put, takeLatest } from 'redux-saga/effects';
import * as tickes from '../../../api/tickes';
import * as actions from './actions';
import * as types from './types';
import { apiActions } from '../api';
import { showToast } from '../../../lib/utils/funcitons';

export function* getList() {
	yield put(apiActions.apiStart());

	try {
		const response = yield call(tickes.getTickes);

		if (response.data) {
			yield put(actions.setList(response.data.boletolista));
		}
	} catch (error) {
		showToast('error', 'Erro ao buscar boletos');
	}

	yield put(apiActions.apiEnd());
}

export function* getItem(payload) {
	const { id } = payload;

	yield put(apiActions.apiStart());

	try {
		const response = yield call(tickes.getTicket, id);

		if (response.data) {
			yield put(actions.setItem(response.data.boleto));
		}
	} catch (error) {
		showToast('error', `Erro ao buscar boleto id: ${id}`);
	}

	yield put(apiActions.apiEnd());
}

export default function* watchBalances() {
	yield takeLatest(types.GET_LIST, getList);
	yield takeLatest(types.GET_ITEM, getItem);
}
