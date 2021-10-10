import { StyleSheet } from 'react-native';
import { Colors } from '../../lib/constants';

export default StyleSheet.create({
	alignTop: {
		alignItems: 'flex-start',
	},
	container: {
		marginBottom: 15,
	},
	containerIcon: {
		paddingRight: 8,
	},
	containerLabel: {
		flexDirection: 'row',
		marginBottom: 5,
	},
	countText: {
		color: Colors.secondary,
		fontSize: 10,
	},
	error: {
		color: Colors.error,
		fontSize: 10,
	},
	flexBig: {
		flex: 0.8,
	},
	flexSmall: {
		flex: 0.2,
		justifyContent: 'flex-end',
	},
	input: {
		color: Colors.secondary,
		flex: 1,
		fontFamily: 'Roboto-Regular',
		fontSize: 16,
		paddingHorizontal: 8,
		paddingVertical: 8,
	},
	inputContainer: {
		alignItems: 'center',
		backgroundColor: Colors.white,
		borderColor: Colors.secondary,
		borderRadius: 5,
		borderWidth: 1,
		flexDirection: 'row',
	},
	inputError: {
		borderColor: Colors.error,
	},
	label: {
		color: Colors.secondary,
		fontSize: 16,
	},
	paddingTop: {
		paddingTop: 8,
	},
	required: {
		color: Colors.green,
		fontSize: 14,
	},
	requiredAbsolute: {
		left: 0,
		position: 'absolute',
		top: -12,
		zIndex: 40,
	},
	row: {
		flexDirection: 'row',
	},
});
