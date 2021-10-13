import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../../lib/constants';

const size = Metrics.screenWidth - 100;

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
		backgroundColor: Colors.white,
		borderRadius: 5,
		width: Metrics.screenWidth - 40,
	},
	image: {
		height: size,
		width: Metrics.screenWidth - 40,
	},
	marginBottom: {
		marginBottom: 15,
	},
	maxSize: {
		maxHeight: Metrics.screenHeight - (size + 100),
	},
	row: {
		alignItems: 'center',
		flexDirection: 'row',
	},
	viewText: {
		padding: 20,
	},
});

export default styles;
