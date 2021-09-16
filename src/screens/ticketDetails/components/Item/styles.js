import { StyleSheet } from 'react-native';
import { Colors } from '../../../../lib/constants';

const styles = StyleSheet.create({
	bodyLeft: {
		alignItems: 'flex-start',
		backgroundColor: Colors.primary,
		flexDirection: 'column',
		height: 110,
		justifyContent: 'center',
		width: '100%',
	},

	container: {
		alignItems: 'center',
		backgroundColor: Colors.white,
		borderRadius: 5,
		flexDirection: 'column',
		justifyContent: 'space-between',
		marginBottom: 20,
		paddingHorizontal: 18,
		paddingVertical: 15,
		width: '100%',
	},

	details: {
		backgroundColor: Colors.primary,
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 20,
		marginBottom: 5,
		width: '100%',
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
		flexDirection: 'row',
		paddingHorizontal: 10,
		paddingVertical: 10,
		width: 220,
	},

	row_ticket: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10,
		width: '100%',
	},

	text: {
		fontFamily: 'Roboto-Regular',
		fontSize: 14,
	},
});

export default styles;
