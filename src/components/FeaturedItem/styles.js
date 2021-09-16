import { StyleSheet } from 'react-native';
import { Colors } from '../../lib/constants';

const styles = StyleSheet.create({
	bodyLeft: {
		alignItems: 'flex-start',
		flexDirection: 'column',
		height: '100%',
		justifyContent: 'center',
		width: '80%',
	},

	bodyRight: {
		alignItems: 'flex-end',
		flex: 1,
		height: '100%',
		justifyContent: 'center',
		padding: 0,
		width: '20%',
	},

	container: {
		alignItems: 'center',
		backgroundColor: Colors.white,
		borderRadius: 5,
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'flex-end',
		marginTop: 10,
		paddingHorizontal: 10,
		paddingVertical: 10,
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
});

export default styles;
