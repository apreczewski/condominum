import { StyleSheet } from 'react-native';
import { Colors } from '../../lib/constants';

const styles = StyleSheet.create({
	col: {
		alignItems: 'flex-start',
		flexDirection: 'column',
		marginTop: 38,
		width: '100%',
	},

	container: {
		marginTop: 10,
	},

	details: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 20,
		marginBottom: 40,
		marginTop: 20,
	},
	h1: {
		color: Colors.primary,
		fontFamily: 'Roboto-Bold',
		fontSize: 30,
	},

	h3: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Regular',
		fontSize: 15,
		marginRight: 5,
	},

	label: {
		borderRadius: 25,
		borderStyle: 'solid',
		borderWidth: 1,
		color: Colors.secondary,
		flexDirection: 'row',
		fontFamily: 'Roboto-Regular',
		fontSize: 15,
		marginTop: 10,
		paddingHorizontal: 10,
		paddingVertical: 10,
		width: 220,
	},

	row: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	row_ticket: {
		alignItems: 'center',
		flexDirection: 'row',
	},
});

export default styles;
