import { StyleSheet } from 'react-native';
import { Colors } from '../../lib/constants';

const styles = StyleSheet.create({
	addSubTitle: {
		color: Colors.tertiary,
		fontFamily: 'Roboto-Bold',
		fontSize: 15,
		fontWeight: '400',
	},
	addTitle: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 30,
		fontWeight: 'bold',
	},
	body: {
		alignItems: 'flex-start',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
	},
	col: {
		alignItems: 'flex-start',
		flexDirection: 'column',
		marginTop: 38,
		width: '100%',
	},

	container: {
		marginTop: 10,
	},
	h1: {
		color: Colors.primary,
		fontFamily: 'Roboto-Bold',
		fontSize: 30,
	},
	h2: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 20,
		marginBottom: 20,
	},
	h4: {
		backgroundColor: Colors.white,
		borderRadius: 25,
		borderStyle: 'solid',
		borderWidth: 1,
		color: Colors.secondary,
		flexDirection: 'row',
		fontFamily: 'Roboto-Bold',
		fontSize: 15,
		marginTop: 8,
		paddingHorizontal: 35,
		paddingVertical: 10,
	},

	header: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 20,
		marginBottom: 10,
		marginLeft: 28,
	},

	label: {
		backgroundColor: Colors.backgroundLabel,
		borderRadius: 25,
		borderStyle: 'solid',
		borderWidth: 1,
		color: Colors.secondary,
		flexDirection: 'row',
		fontFamily: 'Roboto-Regular',
		fontSize: 15,
		justifyContent: 'space-between',
		marginTop: 10,
		paddingHorizontal: 30,
		paddingVertical: 10,
		width: 210,
	},

	row: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	row_balance: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: 210,
	},
});

export default styles;
