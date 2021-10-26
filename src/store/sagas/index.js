import { fork } from 'redux-saga/effects';
import watchUserAuthentication from '../ducks/auth/sagas';
import watchBalances from '../ducks/balances/sagas';
import watchPublications from '../ducks/publications/sagas';
import watchforgotPassword from '../ducks/forgotPassword/sagas';
import watchTickes from '../ducks/tickes/sagas';
import watchHelp from '../ducks/help/sagas';

export default function* startForman() {
	yield fork(watchUserAuthentication);
	yield fork(watchBalances);
	yield fork(watchPublications);
	yield fork(watchforgotPassword);
	yield fork(watchTickes);
	yield fork(watchHelp);
}
