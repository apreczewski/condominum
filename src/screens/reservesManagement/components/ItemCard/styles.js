import { StyleSheet } from 'react-native';
import { Colors } from '../../../../lib/constants';

const styles = StyleSheet.create({
	card: {
		alignItems: 'center',
		backgroundColor: Colors.white,
		borderRadius: 5,
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
	img: {
		height: 65,
		width: 65,
	},
	marginBottom: {
		marginBottom: 10,
	},
	viewContent: {
		alignItems: 'center',
		flexDirection: 'row',
		width: '65%',
	},
	viewText: {
		marginLeft: 15,
	},
});

export default styles;
