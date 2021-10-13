import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../lib/constants';

const styles = StyleSheet.create({
	btnContainer: {
		width: 100,
	},
	container: {
		alignItems: 'center',
		backgroundColor: Colors.transparent,
		justifyContent: 'center',
	},
	content: {
		alignItems: 'center',
		backgroundColor: Colors.white,
		borderRadius: 5,
		justifyContent: 'center',
		paddingVertical: 20,
		width: Metrics.screenWidth - 40,
	},
	rowBtn: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20,
		width: 215,
	},
});

export default styles;
