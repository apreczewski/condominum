import { call, put, takeLatest } from 'redux-saga/effects';
import { apiActions } from '../api';
import * as drawerNavigator from '../../../api/drawerNavigator';
import * as actions from './actions';
import * as types from './types';
import { showToast } from '../../../lib/utils/funcitons';

export function* getDrawer() {
	yield put(apiActions.apiStart());

	try {
		const response = yield call(drawerNavigator.getDrawer);
		if (response.data) {
			yield put(actions.setList(response.data.funcionalidade));
		}
	} catch (error) {
		showToast('error', 'Erro ao buscar funcionalidades');
	}

	yield put(apiActions.apiEnd());
}

export default function* watchDrawerNavigator() {
	yield takeLatest(types.GET_LIST, getDrawer);
}
