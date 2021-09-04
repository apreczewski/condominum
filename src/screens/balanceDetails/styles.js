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
	card: {
		alignItems: 'center',
		backgroundColor: Colors.white,
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 10,
		paddingHorizontal: 15,
		paddingVertical: 15,
		width: '100%',
	},
	cardTitle: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 20,
	},
	col: {
		alignItems: 'flex-start',
		flexDirection: 'column',
		width: '100%',
	},
	col1: {
		alignItems: 'flex-start',
		flexDirection: 'column',
		marginTop: 38,
		width: 'auto',
	},
	col2: {
		alignItems: 'flex-start',
		flexDirection: 'column',
		marginTop: 38,
		width: 'auto',
	},
	colLeft: {
		alignItems: 'flex-start',
		flexDirection: 'column',
		width: '60%',
	},
	colRight: {
		alignItems: 'flex-end',
		flexDirection: 'column',
		width: '40%',
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
		marginTop: 20,
	},
	h3: {
		backgroundColor: Colors.backgroundLabel,
		borderRadius: 25,
		borderStyle: 'solid',
		borderWidth: 1,
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 15,
		marginTop: 8,
		paddingHorizontal: 35,
		paddingVertical: 10,
	},
	row: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
	},
});

export default styles;
