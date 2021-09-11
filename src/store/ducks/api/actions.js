import * as types from './types';

export const apiStart = () => ({
	type: types.API_START,
});

export const apiEnd = () => ({
	type: types.API_END,
});

export default {
	apiStart,
	apiEnd,
};
