import { SET_HELP } from './types';

const initialState = {
	help: [],
};

const helpReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_HELP:
			return {
				...state,
				help: action.data,
			};

		default:
			return state;
	}
};

export default helpReducer;
