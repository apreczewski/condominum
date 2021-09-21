import { StyleSheet } from 'react-native';
import { Colors } from '../../../../lib/constants';

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.white,
		borderRadius: 5,
		justifyContent: 'space-between',
		paddingHorizontal: 18,
		paddingVertical: 15,
		width: '100%',
	},

	details: {
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

	row_ticket: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 5,
		width: '100%',
	},

	value: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 11,
		maxWidth: '30%',
	},
});

export default styles;
