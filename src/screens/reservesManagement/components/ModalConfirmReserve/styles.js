import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../../lib/constants';

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
	row: {
		alignItems: 'center',
		flexDirection: 'row',
	},
});

export default styles;
