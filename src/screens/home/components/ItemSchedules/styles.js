import { StyleSheet } from 'react-native';
import { Colors } from '../../../../lib/constants';

const styles = StyleSheet.create({
	baseboard: {
		color: Colors.primary,
		fontFamily: 'Roboto-Bold',
		fontSize: 15,
		marginLeft: 4,
	},

	body: {
		paddingHorizontal: 19,
		paddingTop: 16,
		width: '100%',
	},

	container: {
		alignItems: 'center',
		backgroundColor: Colors.white,
		borderRadius: 5,
		elevation: 3,
		justifyContent: 'space-between',

		marginTop: 20,
		shadowColor: Colors.black,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
	},

	containerSeeAll: {
		borderTopColor: Colors.secondary_470,
		borderTopWidth: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 19,
		paddingVertical: 16,
		width: '100%',
	},

	h1: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 20,
	},

	row: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 30,
		width: '100%',
	},

	rowForLeft: {
		alignItems: 'center',
		flexDirection: 'row',
		marginBottom: 30,
		width: '100%',
	},

	text: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Regular',
		fontSize: 15,
		marginBottom: 30,
		maxWidth: '100%',
	},
});

export default styles;
