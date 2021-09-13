import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../../lib/constants';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		backgroundColor: Colors.white,
		borderRadius: 5,
		height: Metrics.screenHeight - 50,
		width: Metrics.screenWidth - 50,
	},
	styleModal: {
		marginBottom: 0,
		marginHorizontal: 0,
	},
});

export default styles;
