import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { General, Pallete } from '../../lib/constants';

const styles = StyleSheet.create({
	container: {
		...General.container,
		backgroundColor: Colors.white,
		flex: 1,
		height: '100vh',
	},

	description: {
		...Pallete.regularLight,
		color: Colors.secondary,
		fontSize: 15,
		lineHeight: 20,
		textAlign: 'justify',
	},

	image: {
		marginTop: 60,
		...General.section,
		height: 50,
		width: 200,
	},

	info: {
		...Pallete.inputRegular,
		color: Colors.secondary,
		textAlign: 'center',
	},

	middle: {
		alignItems: 'center',
		justifyContent: 'center',
	},

	version: {
		...Pallete.regularLight,
		color: Colors.secondary,
		marginBottom: 40,
		textAlign: 'center',
	},
});

export default styles;
