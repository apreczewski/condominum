import { StyleSheet } from 'react-native';
import { Colors } from '../../lib/constants';

const styles = StyleSheet.create({
	containerInput: {
		alignItems: 'center',
		backgroundColor: Colors.background,
		borderColor: Colors.secondary,
		borderRadius: 50,
		borderWidth: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		paddingHorizontal: 15,
	},
	input: {
		color: Colors.secondary,
		flex: 1,
		fontFamily: 'Roboto-Regular',
		fontSize: 16,
		paddingRight: 10,
		paddingVertical: 8,
	},
});

export default styles;
