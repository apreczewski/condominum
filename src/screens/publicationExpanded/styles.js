import { StyleSheet } from 'react-native';
import { Colors } from '../../lib/constants';

const styles = StyleSheet.create({
	body: {
		alignItems: 'flex-start',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
	},
	col: {
		alignItems: 'flex-start',
		flexDirection: 'column',
		width: '80%',
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
		marginBottom: 38,
	},
});

export default styles;
