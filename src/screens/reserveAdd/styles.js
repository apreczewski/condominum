import { StyleSheet } from 'react-native';
import { Colors } from '../../lib/constants';

export const indicatorStyle = {
	stepIndicatorSize: 20,
	currentStepIndicatorSize: 23,
	separatorStrokeWidth: 0,
	currentStepStrokeWidth: 1,
	stepStrokeCurrentColor: Colors.primary,
	stepStrokeWidth: 1,
	stepStrokeFinishedColor: Colors.primary,
	stepStrokeUnFinishedColor: Colors.gray,
	separatorFinishedColor: Colors.primary,
	separatorUnFinishedColor: Colors.gray,
	stepIndicatorFinishedColor: Colors.primary,
	stepIndicatorUnFinishedColor: Colors.gray,
	stepIndicatorCurrentColor: Colors.primary,
	stepIndicatorLabelFontSize: 0,
	currentStepIndicatorLabelFontSize: 0,
	stepIndicatorLabelCurrentColor: 'transparent',
	stepIndicatorLabelFinishedColor: 'transparent',
	stepIndicatorLabelUnFinishedColor: 'transparent',
};

export const styles = StyleSheet.create({
	stepIndicator: {
		marginBottom: 15,
	},
});
