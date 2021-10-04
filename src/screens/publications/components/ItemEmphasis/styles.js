import { StyleSheet } from 'react-native';
import { Colors } from '../../../../lib/constants';

const styles = StyleSheet.create({
	baseboard: {
		color: Colors.secondary_470,
		flexDirection: 'row',
		fontFamily: 'Roboto-Bold',
		fontSize: 15,
		width: '100%',
	},

	container: {
		alignItems: 'center',
		backgroundColor: Colors.white,
		borderRadius: 5,
		elevation: 3,
		padding: 13,
		shadowColor: Colors.black,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
	},

	content: {
		position: 'relative',

		width: '100%',
	},
	image: {
		borderRadius: 5,
		height: 120,
		marginBottom: 15,
		width: '100%',
	},
	seeMore: {
		backgroundColor: Colors.white,
		borderRadius: 25,
		color: Colors.primary,
		fontFamily: 'Roboto-Bold',
		position: 'absolute',
		right: 5,
		textAlign: 'center',
		top: 5,
		width: 100,
	},
	title: {
		color: Colors.primary,
		flexDirection: 'row',
		fontFamily: 'Roboto-Regular',
		fontSize: 20,
		marginBottom: 10,
		width: '100%',
	},
});

export default styles;
