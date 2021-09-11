import { fork } from 'redux-saga/effects';
import watchUserAuthentication from '../ducks/auth/sagas';
import watchBalance from '../ducks/balance/sagas';

export default function* startForman() {
	yield fork(watchUserAuthentication);
	yield fork(watchBalance);
}
