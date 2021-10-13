import Colors from './colors';

const Pallete = {
	screen: {
		backgroundColor: Colors.background,
		padding: 20,
		flex: 1,
	},

	h1: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 30,
	},
	h3: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 24,
	},
	h5Primary: {
		color: Colors.primary,
		fontFamily: 'Roboto-Bold',
		fontSize: 16,
	},
	h5Secondary: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 16,
	},
	paragraph: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Regular',
		fontSize: 14,
	},
	paragraphPrimary: {
		color: Colors.primary,
		fontFamily: 'Roboto-Regular',
		fontSize: 14,
	},
	paragraphSecundary: {
		color: Colors.tertiary,
		fontFamily: 'Roboto-Regular',
		fontSize: 14,
	},

	inputRegular: {
		fontSize: 16,
		fontFamily: 'Roboto-Regular',
	},

	regularLight: {
		fontSize: 14,
		fontFamily: 'Roboto-Regular',
	},

	tabBold: {
		// fontSize: FontsSize.tab,
		fontSize: 14,
		fontFamily: 'Roboto-Bold',
	},
};

export default Pallete;
