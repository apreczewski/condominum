import React from 'react';
import { Text } from 'react-native';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

export function ValueFormat({ value, style }) {
	return (
		<NumberFormat
			value={value}
			displayType="text"
			thousandSeparator="."
			decimalSeparator=","
			prefix="R$ "
			renderText={(formattedValue) => (
				<Text style={style}>{formattedValue}</Text>
			)}
		/>
	);
}

ValueFormat.propTypes = {
	value: PropTypes.number,
	style: PropTypes.shape({}),
};

ValueFormat.defaultProps = {
	value: 0,
	style: {},
};
