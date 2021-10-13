import {
	RESET_USER,
	SET_TOKEN,
	SET_USER_AUTH,
	SET_LOADING,
	SET_CONDO,
} from './types';

const initialState = {
	token: false,
	user: {},
	loading: false,
	condominium: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_AUTH:
			return {
				...state,
				user: action.user,
			};
		case SET_CONDO:
			return {
				...state,
				condominium: action.condominium,
			};
		case SET_TOKEN:
			return {
				...state,
				token: action.token,
			};
		case SET_LOADING:
			return {
				...state,
				loading: !state.loading,
			};
		case RESET_USER:
			return {
				...state,
				token: false,
				user: false,
				condominium: false,
			};
		default:
			return state;
	}
};

export default authReducer;
