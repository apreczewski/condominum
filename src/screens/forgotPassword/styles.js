import { StyleSheet } from 'react-native';
import { Colors } from '../../lib/constants';

const styles = StyleSheet.create({
	logo: {
		alignSelf: 'center',
		height: 150,
		marginTop: 30,
		resizeMode: 'contain',
		width: 250,
	},

	text: {
		alignContent: 'center',
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 18,
		justifyContent: 'center',
		marginVertical: 30,
		textAlign: 'center',
		width: '100%',
	},

	viewButton: {
		marginTop: 150,
	},
});

export default styles;
