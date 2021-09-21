import React from 'react';
import { TouchableOpacity, Text, ActiveIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Colors } from '../../lib/constants';

import styles from './styles';

const Button = ({
	loading,
	text,
	disabled,
	onPress,
	color,
	background,
	containerStyle,
}) => {
	let borderColor = '';
	let fontColor = '';
	let borderColorDisabled = '';

	switch (color) {
		case 'green':
			borderColor = Colors.green;
			fontColor = Colors.green;
			borderColorDisabled = Colors.green_400;
			break;

		default:
			borderColor = Colors.primary;
			fontColor = Colors.primary;
			borderColorDisabled = Colors.primary_400;
			break;
	}

	return (
		<TouchableOpacity
			onPress={onPress}
			disabled={disabled}
			style={[
				styles.button,
				{
					backgroundColor: background,
					borderColor: disabled ? borderColorDisabled : borderColor,
				},
				containerStyle,
			]}>
			{loading ? (
				<ActiveIndicator
					color={disabled ? borderColorDisabled : fontColor}
				/>
			) : (
				<Text
					style={[
						styles.text,
						{
							color: disabled ? borderColorDisabled : fontColor,
						},
					]}>
					{text}
				</Text>
			)}
		</TouchableOpacity>
	);
};

Button.propTypes = {
	loading: PropTypes.bool,
	onPress: PropTypes.func,
	text: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	color: PropTypes.string,
	background: PropTypes.string,
	containerStyle: PropTypes.shape({}),
};

Button.defaultProps = {
	loading: false,
	onPress: () => {},
	disabled: false,
	color: 'primary',
	background: Colors.background,
	containerStyle: {},
};

export default Button;
