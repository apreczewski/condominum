import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../../lib/constants';

const size = Metrics.screenWidth - 100;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: Colors.transparent,
		justifyContent: 'center',
	},
	content: {
		backgroundColor: Colors.white,
		borderRadius: 5,
		padding: 20,
		width: Metrics.screenWidth - 40,
	},
	marginBottom: {
		marginBottom: 10,
	},
	marginBottomBig: {
		marginBottom: 20,
	},
	marginBtn: {
		marginTop: 10,
	},
	maxSize: {
		maxHeight: Metrics.screenHeight - (size + 100),
	},
	row: {
		alignItems: 'center',
		flexDirection: 'row',
	},
	viewText: {
		paddingVertical: 20,
	},
});

export default styles;
