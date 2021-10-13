import { StyleSheet } from 'react-native';
import { Colors } from '../../../../lib/constants';

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.white,
		height: '100%',
		width: '85%',
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
		width: '100%',
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
});

export default styles;
