import { call, put, takeLatest } from 'redux-saga/effects';
import { apiActions } from '../api';
import * as help from '../../../api/help';
import * as actions from './actions';
import * as types from './types';
import { showToast } from '../../../lib/utils/funcitons';

export function* getHelp() {
	yield put(apiActions.apiStart());

	try {
		const response = yield call(help.getHelp);
		if (response.data) {
			yield put(actions.setHelp(response.data.ajuda));
		}
	} catch (error) {
		showToast('error', 'Erro ao buscar ajuda');
	}

	yield put(apiActions.apiEnd());
}

export default function* watchHelp() {
	yield takeLatest(types.GET_HELP, getHelp);
}
