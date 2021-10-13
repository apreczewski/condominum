import Toast from 'react-native-root-toast';
import { Dimensions, Platform } from 'react-native';
import { Colors } from '../constants';

export function isIphoneX() {
	const dimen = Dimensions.get('window');
	return (
		Platform.OS === 'ios' &&
		!Platform.isPad &&
		!Platform.isTVOS &&
		(dimen.height === 812 ||
			dimen.width === 812 ||
			dimen.height === 896 ||
			dimen.width === 896)
	);
}

export function ifIphoneX(iphoneXStyle, regularStyle) {
	if (isIphoneX()) {
		return iphoneXStyle;
	}
	return regularStyle;
}

export function showToast(type, message, hidden = {}) {
	let color = '';
	if (type === 'error') {
		color = Colors.error;
	} else {
		color = Colors.success;
	}

	Toast.show(message, {
		duration: Toast.durations.SHORT,
		position: Toast.positions.BOTTOM,
		animation: true,
		hideOnPress: true,
		backgroundColor: color,
		onHidden: () => hidden,
	});
}
