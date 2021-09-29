import { StyleSheet } from 'react-native';
import Colors from '../../lib/constants/colors';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		borderColor: Colors.secondary,
		borderRadius: 5,
		borderWidth: 1,
		flexDirection: 'row',

		paddingHorizontal: 10,
		paddingVertical: 16,
	},

	input: {
		color: Colors.secondary,
		flex: 1,
		fontFamily: 'Roboto-Regular',
		fontSize: 18,
	},

	label: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Regular',
		fontSize: 18,
		marginBottom: 8,
		marginTop: 30,
	},

	labelError: {
		color: Colors.primary_400,
		fontFamily: 'Roboto-Regular',
		fontSize: 15,
		marginLeft: 5,
	},
});

export default styles;
