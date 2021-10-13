import { call, put } from 'redux-saga/effects';
import * as balances from '../../../api/balances';
import * as actions from './actions';
import { apiActions } from '../api';

export function* getList() {
	yield put(apiActions.apiStart());

	try {
		const response = yield call(balances.getBalances);

		if (response.data) {
			yield put(actions.setList(response.data));
		}
	} catch (error) {
		// showToast('error', 'Erro ao buscar notificações');
	}

	yield put(apiActions.apiEnd());
}
