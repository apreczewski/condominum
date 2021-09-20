import { fork } from 'redux-saga/effects';
import watchUserAuthentication from '../ducks/auth/sagas';
import watchBalance from '../ducks/balances/sagas';
import watchPublication from '../ducks/publications/sagas';

export default function* startForman() {
	yield fork(watchUserAuthentication);
	yield fork(watchBalance);
	yield fork(watchPublication);
}
