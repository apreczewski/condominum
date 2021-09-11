import { combineReducers } from 'redux';
import authReducer from '../ducks/auth';
import balanceReducer from '../ducks/balance';

const rootReducer = combineReducers({
	auth: authReducer,
	balance: balanceReducer,
});

export default rootReducer;
