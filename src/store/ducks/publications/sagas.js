import { call, put } from 'redux-saga/effects';

import * as actions from './actions';
import { apiActions } from '../api';
import { publications } from '../../../lib/utils/dataFaker';

export function* getList() {
	yield put(apiActions.apiStart());

	try {
		const response = yield call(publications);

		if (response.data) {
			yield put(actions.setList(response.data));
		}
	} catch (error) {
		// showToast('error', 'Erro ao buscar notificações');
	}

	yield put(apiActions.apiEnd());
}
