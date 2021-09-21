import { StyleSheet } from 'react-native';
import { Colors } from '../../lib/constants';

const styles = StyleSheet.create({
	row: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 10,
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
});

export default styles;
