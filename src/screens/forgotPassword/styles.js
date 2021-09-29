import { StyleSheet } from 'react-native';
import { Colors } from '../../lib/constants';

const styles = StyleSheet.create({
	logo: {
		alignSelf: 'center',
		height: 150,
		resizeMode: 'contain',
		width: 250,
	},

	text: {
		alignContent: 'center',
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 18,
		justifyContent: 'center',
		marginVertical: 40,
		textAlign: 'center',
		width: '100%',
	},

	viewButton: {
		marginTop: 200,
	},
});

export default styles;
