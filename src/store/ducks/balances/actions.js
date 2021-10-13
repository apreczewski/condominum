import * as types from './types';

export const getList = () => ({
	type: types.GET_LIST,
});

export const setList = (data) => ({
	type: types.SET_LIST,
	data,
});

export default {
	getList,
	setList,
};
