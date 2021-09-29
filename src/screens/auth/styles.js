import { StyleSheet } from 'react-native';
import { Colors } from '../../lib/constants';

const styles = StyleSheet.create({
	labelNewPassword: {
		alignItems: 'center',
		marginTop: 38,
		width: '100%',
	},

	logo: {
		alignSelf: 'center',
		height: 150,
		resizeMode: 'contain',
		width: 250,
	},

	newPassword: {
		color: Colors.primary,
		fontFamily: 'Roboto-Regular',
		fontSize: 18,
	},

	viewButton: {
		marginTop: 33,
	},

	viewButtonForm: {
		marginTop: 40,
	},
});

export default styles;
