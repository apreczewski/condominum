import { SET_LIST, SET_DETAILS_BALANCE } from './types';
import data from './data.json';

const initialState = {
	list: data,
	detailsBalance: {},
};

const balanceReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LIST:
			return {
				...state,
				list: action.data,
			};

		case SET_DETAILS_BALANCE:
			return {
				...state,
				detailsBalance: action.data,
			};

		default:
			return state;
	}
};

export default balanceReducer;
