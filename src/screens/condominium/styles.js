import { StyleSheet } from 'react-native';
import { Colors } from '../../lib/constants';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: Colors.white,
		borderRadius: 5,
		flexDirection: 'row',
		height: 50,
		justifyContent: 'space-between',
		marginBottom: 15,
		paddingHorizontal: 35,
		paddingVertical: 15,
		width: '100%',
	},

	text: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 20,
	},
});
export default styles;
