import { StyleSheet } from 'react-native';
import { Pallete, Colors } from '../../lib/constants';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flexDirection: 'row',
		flex: 1,
		paddingVertical: 20,
	},
	text: {
		...Pallete.inputRegular,
		color: Colors.secondary,
		width: '90%',
	},
	title: {
		...Pallete.inputRegular,
		color: Colors.secondary,
		width: '90%',
	},
});

export default styles;
