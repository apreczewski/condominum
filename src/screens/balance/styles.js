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
		alignItems: 'flex-start',
		backgroundColor: Colors.white,
		borderRadius: 5,
		height: 110,
		justifyContent: 'flex-start',
		marginBottom: 15,
		padding: 6,
		width: '100%',
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
	h3: {
		alignContent: 'center',
		backgroundColor: Colors.backgroundLabel,
		borderRadius: 25,
		borderStyle: 'solid',
		borderWidth: 1,
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 15,
		marginTop: 8,
		paddingHorizontal: 10,
		paddingVertical: 10,
		width: 210,
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

	row: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});

export default styles;
