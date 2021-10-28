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
		flexDirection: 'column',
	},
	right: {
		alignItems: 'flex-end',
		flex: 0.1,
	},
	text: {
		...Pallete.inputRegular,
		color: Colors.secondary,
		width: '90%',
	},
	title: {
		...Pallete.h5Secondary,
		color: Colors.secondary,
		marginBottom: 10,
		width: '90%',
	},
});

export default styles;
