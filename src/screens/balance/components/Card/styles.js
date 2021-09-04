import { StyleSheet } from 'react-native';
import { Colors } from '../../../../lib/constants';

const styles = StyleSheet.create({
	bodyLeft: {
		alignItems: 'flex-start',
		flexDirection: 'column',
		height: 110,
		justifyContent: 'center',
		width: '80%',
	},

	bodyRight: {
		alignItems: 'center',
		flexDirection: 'row',
		height: 110,
		justifyContent: 'flex-end',
		width: '20%',
	},

	col: {
		alignItems: 'flex-start',
		flexDirection: 'column',
		marginTop: 38,
		width: '100%',
	},

	container: {
		alignItems: 'center',
		backgroundColor: Colors.white,
		borderRadius: 5,
		flexDirection: 'row',
		height: 110,
		justifyContent: 'space-between',
		marginBottom: 15,
		padding: 6,
		paddingHorizontal: 18,
		width: '100%',
	},

	h4: {
		backgroundColor: Colors.white,
		borderRadius: 25,
		borderStyle: 'solid',
		borderWidth: 1,
		color: Colors.secondary,
		flexDirection: 'row',
		fontFamily: 'Roboto-Bold',
		fontSize: 15,
		paddingHorizontal: 35,
		paddingVertical: 10,
	},

	header: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 20,
		marginBottom: 10,
		marginLeft: 6,
	},
});

export default styles;
