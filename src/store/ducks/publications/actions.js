import * as types from './types';

export const getList = () => ({
	type: types.GET_LIST,
});

export const setList = (data) => ({
	type: types.SET_LIST,
	data,
});

export const putLike = (data) => ({
	type: types.PUT_LIKE,
	data,
});

export default {
	getList,
	setList,
	putLike,
};
