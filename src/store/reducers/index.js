import { combineReducers } from 'redux';
import authReducer from '../ducks/auth';
import apiReducer from '../ducks/api';
import balanceReducer from '../ducks/balances';
import publicationReducer from '../ducks/publications';
import forgotPasswordReducer from '../ducks/forgotPassword';
import tickesReducer from '../ducks/tickes';
import helpReducer from '../ducks/help';

const rootReducer = combineReducers({
	auth: authReducer,
	api: apiReducer,
	balances: balanceReducer,
	publications: publicationReducer,
	forgotPassword: forgotPasswordReducer,
	tickes: tickesReducer,
	help: helpReducer,
});

export default rootReducer;
