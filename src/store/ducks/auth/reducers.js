import {
	RESET_USER,
	SET_TOKEN,
	SET_USER_AUTH,
	SET_LOADING,
	SET_CONDO,
	SET_ERROR,
	SET_SUCCESS,
} from './types';

const initialState = {
	token: false,
	user: {},
	loading: false,
	condominium: false,
	error: '',
	success: '',
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

		case SET_ERROR:
			return {
				...state,
				error: action.error,
			};

		case SET_SUCCESS:
			return {
				...state,
				success: action.success,
			};

		default:
			return state;
	}
};

export default authReducer;
