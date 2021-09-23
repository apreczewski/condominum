import { StyleSheet } from 'react-native';
import { Colors } from '../../../../lib/constants';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: Colors.white,
		borderRadius: 5,
		justifyContent: 'center',
		marginBottom: 73,
		width: '100%',
	},

	row1: {
		alignItems: 'center',
		borderBottomColor: Colors.secondary_470,
		borderBottomWidth: 1,
		fontSize: 18,
		paddingVertical: 15,
		width: '100%',
	},

	row2: {
		alignItems: 'center',
		fontSize: 18,
		paddingVertical: 20,
		width: '100%',
	},

	subTitle: {
		color: Colors.primary,
		fontSize: 24,
	},

	title: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 18,
	},
});
export default styles;
