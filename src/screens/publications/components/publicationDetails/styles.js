import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../../lib/constants';

const size = Metrics.screenWidth - 100;

const styles = StyleSheet.create({
	close: {
		position: 'absolute',
		right: 5,
		top: 5,
		zIndex: 100,
	},

	container: {
		alignItems: 'center',
		backgroundColor: Colors.transparent,
		justifyContent: 'center',
	},

	content: {
		backgroundColor: Colors.white,
		borderRadius: 5,
		width: Metrics.screenWidth - 40,
	},

	date: {
		alignItems: 'flex-start',
		color: Colors.secondary_470,
		flexDirection: 'row',
		fontFamily: 'Roboto-Bold',
		fontSize: 18,
		width: '100%',
	},

	description: {
		alignItems: 'flex-start',
		flexDirection: 'column',
		paddingHorizontal: 15,
		paddingVertical: 10,
		width: '100%',
	},

	image: {
		height: size,
		width: Metrics.screenWidth - 40,
	},

	like: {
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: Colors.secondary_470,
		borderTopWidth: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		paddingVertical: 16,
		width: '100%',
	},

	likeText: {
		color: Colors.primary,
		fontFamily: 'Roboto-Bold',
		fontSize: 20,
		marginLeft: 14,
	},

	maxSize: {
		maxHeight: Metrics.screenHeight - (size + 100),
	},

	subTitle: {
		color: Colors.tertiary,
		flexDirection: 'row',
		fontFamily: 'Roboto-Regular',
		fontSize: 18,
		marginBottom: 30,
		width: '100%',
	},

	title: {
		color: Colors.primary,
		flexDirection: 'row',
		fontFamily: 'Roboto-Regular',
		fontSize: 25,
		marginBottom: 10,
		width: '100%',
	},

	viewText: {
		padding: 20,
	},
});

export default styles;
