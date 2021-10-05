import { StyleSheet } from 'react-native';
import { Pallete, Colors } from '../../../../lib/constants';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flexDirection: 'row',
		flex: 1,
		paddingVertical: 20,
	},
	left: {
		alignItems: 'center',
		flex: 0.9,
		flexDirection: 'row',
	},
	right: {
		alignItems: 'flex-end',
		flex: 0.1,
	},
	title: {
		...Pallete.inputRegular,
		color: Colors.secondary,
		width: '90%',
	},
});

export default styles;
