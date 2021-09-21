import { fork } from 'redux-saga/effects';
import watchUserAuthentication from '../ducks/auth/sagas';
import watchBalances from '../ducks/balances/sagas';
import watchPublications from '../ducks/publications/sagas';
import watchTickes from '../ducks/tickes/sagas';

export default function* startForman() {
	yield fork(watchUserAuthentication);
	yield fork(watchBalances);
	yield fork(watchPublications);
	yield fork(watchTickes);
}
