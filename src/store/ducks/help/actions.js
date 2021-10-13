import * as types from './types';

export const getHelp = () => ({
	type: types.GET_HELP,
});

export const setHelp = (data) => ({
	type: types.SET_HELP,
	data,
});

export default {
	getHelp,
	setHelp,
};
