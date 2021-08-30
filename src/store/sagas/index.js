import { fork } from 'redux-saga/effects';
import watchUserAuthentication from '../ducks/auth/sagas';

export default function* startForman() {
	yield fork(watchUserAuthentication);
}
