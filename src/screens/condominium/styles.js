import { StyleSheet } from 'react-native';
import { Colors } from '../../lib/constants';

const styles = StyleSheet.create({
	cardAmbient: {
		alignItems: 'center',
		backgroundColor: Colors.white,
		borderColor: Colors.white,
		borderRadius: 5,
		borderWidth: 1,
		elevation: 3,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
		padding: 13,
		shadowColor: Colors.black,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
	},

	container: {
		alignItems: 'center',
		backgroundColor: Colors.white,
		borderColor: Colors.white,
		borderRadius: 5,
		borderWidth: 1,
		elevation: 3,
		justifyContent: 'center',
		marginBottom: 20,
		shadowColor: Colors.black,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
	},

	row1: {
		alignItems: 'center',
		borderBottomColor: Colors.secondary_470,
		borderBottomWidth: 1,
		fontSize: 18,
		paddingVertical: 15,
		width: '100%',
	},

	row2: {
		alignItems: 'center',
		fontSize: 18,
		paddingVertical: 20,
		width: '100%',
	},

	subTitle: {
		color: Colors.primary,
		fontSize: 24,
	},

	title: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 18,
	},

	viewButtons: {
		flex: 1,
	},
});

export default styles;
