import { put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './types';

export function* login(payload) {
	const { user } = payload;

	yield put(actions.setUser(user));
}

export default function* watchUserAuthentication() {
	yield takeLatest(types.LOGIN_USER, login);
}
