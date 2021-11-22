import * as types from './types';

export const getList = () => ({
	type: types.GET_LIST,
});

export const setList = (data) => ({
	type: types.SET_LIST,
	data,
});

export const putItem = (id) => ({
	type: types.PUT_ITEM,
	id,
});

export default {
	getList,
	setList,
	putItem,
};
