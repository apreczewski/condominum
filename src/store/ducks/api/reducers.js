import { API_END, API_START } from './types';

const initialState = {
	loading: false,
};

const apiReducer = (state = initialState, action) => {
	switch (action.type) {
		case API_START:
			return {
				...state,
				loading: true,
			};
		case API_END:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
};

export default apiReducer;
