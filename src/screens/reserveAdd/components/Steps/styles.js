import { StyleSheet } from 'react-native';
import { Colors } from '../../../../lib/constants';

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
	imgAmbient: {
		height: 45,
		marginRight: 15,
		width: 45,
	},
	listAmbient: {
		marginTop: 25,
	},
	row: {
		alignItems: 'center',
		flexDirection: 'row',
	},
	viewHeader: {
		marginBottom: 25,
	},
});

export default styles;
