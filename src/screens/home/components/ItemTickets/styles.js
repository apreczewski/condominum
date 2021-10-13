import { StyleSheet } from 'react-native';
import { Colors } from '../../../../lib/constants';

const styles = StyleSheet.create({
	body: {
		marginBottom: 24,
		padding: 13,
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
		color: Colors.primary,
		fontFamily: 'Roboto-Bold',
		fontSize: 30,
	},

	h2: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 20,
	},

	h3: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Regular',
		fontSize: 15,
		marginRight: 5,
	},

	label: {
		borderColor: Colors.secondary,
		borderRadius: 25,
		borderStyle: 'solid',
		borderWidth: 1,
		flexDirection: 'row',
		marginTop: 10,
		paddingHorizontal: 10,
		paddingVertical: 10,
		width: 220,
	},

	row: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 15,
		width: '100%',
	},

	rowForLeft: {
		alignItems: 'center',
		flexDirection: 'row',
		width: '100%',
	},

	text: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Regular',
		fontSize: 14,
	},
});

export default styles;
