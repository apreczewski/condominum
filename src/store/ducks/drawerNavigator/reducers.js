import { SET_LIST } from './types';

const initialState = {
	list: [],
};

const drawerReducer = (state = initialState, action) => {
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

export default drawerReducer;
