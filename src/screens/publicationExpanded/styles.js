import { StyleSheet } from 'react-native';
import { Colors } from '../../lib/constants';

const styles = StyleSheet.create({
	baseboard: {
		color: Colors.secondary_470,
		flexDirection: 'row',
		fontFamily: 'Roboto-Bold',
		fontSize: 18,
		marginHorizontal: 15,
	},

	body: {
		alignItems: 'flex-start',
		backgroundColor: Colors.white,
		borderRadius: 5,
		flexDirection: 'column',
		paddingBottom: 23,
		paddingHorizontal: 25,
		width: '100%',
	},

	container: {
		backgroundColor: Colors.white,
		width: '100%',
	},

	containerBaseboard: {
		flexDirection: 'row',
		width: '100%',
	},

	containerLike: {
		alignItems: 'center',
		borderTopColor: Colors.secondary_470,
		borderTopWidth: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		paddingVertical: 16,
		width: '100%',
	},

	h3: {
		color: Colors.tertiary,
		flexDirection: 'row',
		fontFamily: 'Roboto-Regular',
		fontSize: 18,
		marginBottom: 40,
		width: '100%',
	},

	iconClose: {
		alignItems: 'flex-start',
		flexDirection: 'column',
		left: 350,
		position: 'absolute',
		width: '80%',
		zIndex: 2,
	},

	image: {
		borderRadius: 5,
		marginBottom: 29,
		width: '100%',
	},

	imageBaseboard: {
		height: 40,
		width: 40,
	},

	imageContainerBaseboard: {
		width: '11%',
	},

	like: {
		color: Colors.primary,
		fontFamily: 'Roboto-Bold',
		fontSize: 20,
		marginLeft: 14,
	},

	textContainerBaseboard: {
		justifyContent: 'center',
		width: '89%',
	},

	title: {
		color: Colors.primary,
		flexDirection: 'row',
		fontFamily: 'Roboto-Regular',
		fontSize: 25,
		marginBottom: 10,
		width: '100%',
	},
});

export default styles;
