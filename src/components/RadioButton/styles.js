import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	content: {
		alignItems: 'center',
		flexDirection: 'row',
	},
	label: {
		flex: 1,
		fontFamily: 'Roboto-Regular',
		fontSize: 18,
		marginLeft: 15,
	},
	selectRound: {
		borderRadius: 20,
		height: 13,
		width: 13,
	},
	selectSquare: {
		borderRadius: 3,
		height: 13,
		width: 13,
	},
	viewRound: {
		alignItems: 'center',
		borderRadius: 20,
		borderWidth: 1,
		height: 20,
		justifyContent: 'center',
		width: 20,
	},
	viewSquare: {
		alignItems: 'center',
		borderRadius: 3,
		borderWidth: 1,
		height: 20,
		justifyContent: 'center',
		width: 20,
	},
});

export default styles;
