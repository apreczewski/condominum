import { StyleSheet } from 'react-native';
import { Colors } from '../../lib/constants';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	text: {
		color: Colors.secondary,
		fontSize: 13,
	},
	title: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 30,
		paddingBottom: 20,
	},
});

export default styles;
