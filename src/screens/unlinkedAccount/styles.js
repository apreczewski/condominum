import { StyleSheet } from 'react-native';
import { Colors } from '../../lib/constants';

const styles = StyleSheet.create({
	text: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Regular',
		fontSize: 18,
		marginBottom: 20,
		textAlign: 'left',
		width: '100%',
	},

	title: {
		alignContent: 'center',
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 27,
		justifyContent: 'center',
		textAlign: 'center',
		width: '84%',
	},

	viewText: {
		backgroundColor: Colors.white,
		borderRadius: 5,
		marginVertical: 50,
		paddingHorizontal: 10,
		paddingVertical: 28,
		width: '100%',
	},

	viewTitle: {
		alignItems: 'center',
	},
});

export default styles;
