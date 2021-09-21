import { combineReducers } from 'redux';
import authReducer from '../ducks/auth';
import apiReducer from '../ducks/api';
import balanceReducer from '../ducks/balances';
import publicationReducer from '../ducks/publications';
import tickesReducer from '../ducks/tickes';

const rootReducer = combineReducers({
	auth: authReducer,
	api: apiReducer,
	balances: balanceReducer,
	publications: publicationReducer,
	tickes: tickesReducer,
});

export default rootReducer;
