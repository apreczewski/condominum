import { SET_LIST } from './types';
import data from './data.json';

const initialState = {
	list: data || [],
};

const balancesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LIST:
			return {
				...state,
				list: action.data,
			};

		default:
			return state;
	}
};

export default balancesReducer;