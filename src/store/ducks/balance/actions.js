import * as types from './types';

export const getList = () => ({
	type: types.GET_LIST,
});

export const setList = (data) => ({
	type: types.SET_LIST,
	data,
});

export const setDetailsBalance = (detailsBalance) => ({
	type: types.SET_DETAILS_BALANCE,
	detailsBalance,
});

export default {
	getList,
	setList,
	setDetailsBalance,
};
