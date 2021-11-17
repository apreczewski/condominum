import { StyleSheet } from 'react-native';
import { Colors } from '../../../../lib/constants';

const styles = StyleSheet.create({
	anchorSeeMore: {
		alignItems: 'flex-end',
		flexDirection: 'row',
		marginTop: 15,
		width: '100%',
	},

	container: {
		alignItems: 'flex-start',
		backgroundColor: Colors.white,
		borderRadius: 5,
		elevation: 3,
		flexDirection: 'column',
		flex: 1,

		justifyContent: 'flex-end',
		padding: 13,
		paddingHorizontal: 15,
		paddingVertical: 15,
		width: '100%',
	},

	label: {
		backgroundColor: Colors.backgroundLabel,
		borderRadius: 25,
		borderStyle: 'solid',
		borderWidth: 1,
		color: Colors.secondary,
		flexDirection: 'row',
		fontFamily: 'Roboto-Regular',
		fontSize: 15,
		justifyContent: 'space-between',
		marginTop: 10,
		paddingHorizontal: 30,
		paddingVertical: 10,
		width: 200,
	},

	text: {
		color: Colors.primary,
		flexDirection: 'row',
		fontSize: 30,
		fontWeight: 'bold',
		width: '100%',
	},

	textInfo: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
	},

	textSeeMore: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 18,
		height: '100%',
	},
});

export default styles;
