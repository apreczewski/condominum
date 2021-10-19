import { call, put, takeLatest } from 'redux-saga/effects';
import * as balances from '../../../api/balances';
import * as types from './types';
import * as actions from './actions';
import { apiActions } from '../api';
import { showToast } from '../../../lib/utils/funcitons';

export function* getList() {
	yield put(apiActions.apiStart());

	try {
		const response = yield call(balances.getBalances);

		if (response.data) {
			yield put(actions.setList(response.data.balancetelista));
		}
	} catch (error) {
		showToast('error', 'Erro ao buscar balancetes');
	}

	yield put(apiActions.apiEnd());
}

export default function* watchBalances() {
	yield takeLatest(types.GET_LIST, getList);
}
