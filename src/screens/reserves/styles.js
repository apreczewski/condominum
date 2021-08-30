import { StyleSheet } from 'react-native';
import { Colors } from '../../lib/constants';

const styles = StyleSheet.create({
	addBtn: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	addText: {
		color: Colors.primary,
		fontFamily: 'Roboto-Bold',
		fontSize: 12,
	},
	row: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});

export default styles;
