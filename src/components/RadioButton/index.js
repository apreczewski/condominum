import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { Colors } from '../../lib/constants';

import styles from './styles';

const RadioButton = ({
	label,
	disabled,
	onPress,
	select,
	type,
	colorLabel,
	contentStyle,
	labelStyle,
}) => {
	let styleBtn = {};
	let styleSelect = {};

	if (type === 'round') {
		styleBtn = styles.viewRound;
		styleSelect = styles.selectRound;
	} else {
		styleBtn = styles.viewSquare;
		styleSelect = styles.selectSquare;
	}

	return (
		<TouchableOpacity
			onPress={onPress}
			disabled={disabled}
			style={[styles.content, contentStyle]}>
			<View
				style={[
					styleBtn,
					{
						borderColor: disabled ? Colors.gray : Colors.primary,
					},
				]}>
				{select ? (
					<View
						style={[
							styleSelect,
							{
								backgroundColor: disabled
									? Colors.gray
									: Colors.primary,
							},
						]}
					/>
				) : null}
			</View>
			<Text
				style={[
					styles.label,
					{ color: disabled ? Colors.gray : colorLabel },
					labelStyle,
				]}>
				{label}
			</Text>
		</TouchableOpacity>
	);
};

RadioButton.propTypes = {
	onPress: PropTypes.func,
	label: PropTypes.string,
	disabled: PropTypes.bool,
	type: PropTypes.string,
	colorLabel: PropTypes.string,
	select: PropTypes.bool,
	contentStyle: PropTypes.shape({}),
	labelStyle: PropTypes.shape({}),
};

RadioButton.defaultProps = {
	onPress: () => {},
	disabled: false,
	label: '',
	type: 'round',
	colorLabel: Colors.secondary,
	select: false,
	contentStyle: {},
	labelStyle: {},
};

export default RadioButton;
