import { StyleSheet } from 'react-native';
import { Colors } from '../../../../lib/constants';

const styles = StyleSheet.create({
	baseboard: {
		color: Colors.tertiary,
		flexDirection: 'row',
		fontFamily: 'Roboto-Bold',
		fontSize: 15,
		width: '100%',
	},

	container: {
		alignItems: 'center',
		backgroundColor: Colors.white,
		borderRadius: 5,
		justifyContent: 'space-between',
		marginBottom: 20,
		padding: 6,
		paddingHorizontal: 19,
		paddingVertical: 16,
		width: '100%',
	},

	navigation: {
		width: '100%',
	},

	seeMore: {
		color: Colors.primary,
		flexDirection: 'row',
		fontFamily: 'Roboto-Bold',
		fontSize: 15,
		marginBottom: 15,
		width: '100%',
	},

	subTitle: {
		color: Colors.tertiary,
		flexDirection: 'row',
		fontFamily: 'Roboto-Regular',
		fontSize: 15,
		marginBottom: 10,
		width: '100%',
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
