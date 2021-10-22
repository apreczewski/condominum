import { StyleSheet } from 'react-native';
import { Colors } from '../../../../lib/constants';

const styles = StyleSheet.create({
	card: {
		alignItems: 'flex-end',
		backgroundColor: Colors.white,
		borderRadius: 5,
		flexDirection: 'row',
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
	},
	col: {
		alignItems: 'flex-start',
		flexDirection: 'column',
		width: '100%',
	},

	colLeft: {
		alignItems: 'flex-start',
		flexDirection: 'column',
		width: '40%',
	},

	colRight: {
		alignItems: 'flex-end',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		width: '60%',
	},

	h3: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 14,
	},
});

export default styles;
