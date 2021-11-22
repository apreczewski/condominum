import { SET_LIST, SET_ITEM } from './types';

const initialState = {
	list: [],
	item: {},
};

const publicationsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LIST:
			return {
				...state,
				list: action.data,
			};
		case SET_ITEM:
			return {
				...state,
				item: action.data,
			};

		default:
			return state;
	}
};

export default publicationsReducer;
