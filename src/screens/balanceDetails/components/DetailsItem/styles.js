import { StyleSheet } from 'react-native';
import { Colors } from '../../../../lib/constants';

const styles = StyleSheet.create({
	card: {
		alignItems: 'flex-end',
		backgroundColor: Colors.white,
		borderRadius: 5,
		flexDirection: 'column',
		justifyContent: 'space-between',
		marginTop: 10,
		paddingHorizontal: 15,
		paddingVertical: 15,
		width: '100%',
	},
	cardTitle: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 20,
		marginBottom: 7,
		width: '100%',
	},
	col: {
		flexDirection: 'row',
		width: '100%',
	},

	colLeft: {
		alignItems: 'flex-start',
		flexDirection: 'column',
		width: '50%',
	},

	colRight: {
		alignItems: 'flex-end',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		width: '50%',
	},

	h3: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 14,
	},
});

export default styles;
