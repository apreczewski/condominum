import { call, put } from 'redux-saga/effects';
import * as tickes from '../../../api/tickes';
import * as actions from './actions';
import { apiActions } from '../api';

export function* getList() {
	yield put(apiActions.apiStart());

	try {
		const response = yield call(tickes.getTickes);

		if (response.data) {
			yield put(actions.setList(response.data));
		}
	} catch (error) {
		// showToast('error', 'Erro ao buscar notificações');
	}

	yield put(apiActions.apiEnd());
}
