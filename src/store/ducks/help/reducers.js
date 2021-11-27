import { SET_HELP, SET_TERMS } from './types';

const initialState = {
	help: [],
	terms: [{}],
};

const helpReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_HELP:
			return {
				...state,
				help: action.data,
			};

		case SET_TERMS:
			return {
				...state,
				terms: action.data,
			};

		default:
			return state;
	}
};

export default helpReducer;
