import { StyleSheet } from 'react-native';
import { Colors } from '../../../../lib/constants';

const styles = StyleSheet.create({
	bodyLeft: {
		alignItems: 'flex-start',
		flexDirection: 'column',
		height: 110,
		justifyContent: 'center',
		width: '80%',
	},

	bodyRight: {
		alignItems: 'center',
		flexDirection: 'row',
		height: 110,
		justifyContent: 'flex-end',
		width: '20%',
	},

	container: {
		alignItems: 'center',
		backgroundColor: Colors.white,
		borderRadius: 5,
		flexDirection: 'row',
		height: 110,
		justifyContent: 'space-between',
		marginBottom: 15,
		padding: 6,
		paddingHorizontal: 18,
		width: '100%',
	},

	date: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 20,
		marginBottom: 10,
		marginLeft: 6,
	},

	saldo: {
		alignContent: 'space-between',
		backgroundColor: Colors.white,
		borderRadius: 25,
		borderStyle: 'solid',
		borderWidth: 1,
		color: Colors.secondary,
		flexDirection: 'row',
		fontFamily: 'Roboto-Regular',
		fontSize: 15,
		justifyContent: 'space-between',
		paddingHorizontal: 25,
		paddingVertical: 10,
		width: 200,
	},
});

export default styles;
