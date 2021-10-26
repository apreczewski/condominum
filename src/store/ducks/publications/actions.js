import * as types from './types';

export const getList = () => ({
	type: types.GET_LIST,
});

export const setList = (data) => ({
	type: types.SET_LIST,
	data,
});

export const getItem = (id) => ({
	type: types.GET_ITEM,
	id,
});

export const setItem = (data) => ({
	type: types.SET_ITEM,
	data,
});

export const putLike = (id, status) => ({
	type: types.PUT_LIKE,
	id,
	status,
});

export default {
	getList,
	setList,
	getItem,
	setItem,
	putLike,
};
