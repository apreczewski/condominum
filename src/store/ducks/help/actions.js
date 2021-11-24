import * as types from './types';

export const getHelp = () => ({
	type: types.GET_HELP,
});

export const setHelp = (data) => ({
	type: types.SET_HELP,
	data,
});

export const getTerms = () => ({
	type: types.GET_TERMS,
});

export const setTerms = (data) => ({
	type: types.SET_TERMS,
	data,
});

export default {
	getHelp,
	setHelp,
	getTerms,
	setTerms,
};
