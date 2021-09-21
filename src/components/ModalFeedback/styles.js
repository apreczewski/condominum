import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../lib/constants';

const styles = StyleSheet.create({
	close: {
		position: 'absolute',
		right: 5,
		top: 5,
		zIndex: 100,
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
	text: {
		marginTop: 10,
		paddingHorizontal: 20,
		textAlign: 'center',
	},
});

export default styles;
