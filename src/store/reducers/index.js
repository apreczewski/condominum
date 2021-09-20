import { combineReducers } from 'redux';
import authReducer from '../ducks/auth';
import apiReducer from '../ducks/api';
import balanceReducer from '../ducks/balances';
import publicationReducer from '../ducks/publications';

const rootReducer = combineReducers({
	auth: authReducer,
	api: apiReducer,
	balance: balanceReducer,
	publication: publicationReducer,
});

export default rootReducer;
