import { StyleSheet } from 'react-native';
import { Colors } from '../../lib/constants';

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.white,
		borderRadius: 5,
		// height: 'calc(100% - 80)',
		justifyContent: 'space-between',
		paddingHorizontal: 18,
		paddingVertical: 15,
		width: '100%',
	},

	expenses: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 18,
		marginBottom: 20,
		width: '100%',
	},

	h3: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Regular',
		fontSize: 11,
		marginRight: 5,
		maxWidth: '70%',
	},

	row: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 10,
	},

	row_ticket: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 5,
		width: '100%',
	},

	square: {
		alignItems: 'center',
		backgroundColor: Colors.white,
		borderRadius: 5,
		height: 100,
		justifyContent: 'space-between',
		paddingVertical: 15,
		width: 100,
	},

	textSquare: {
		color: Colors.primary,
		fontFamily: 'Roboto-Bold',
		fontSize: 12,
	},

	value: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 11,
		maxWidth: '30%',
	},
});

export default styles;
