import React from 'react';
import { Text } from 'react-native';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

export function ValueFormat({ value, style }) {
	// const currencyFormatter = (vlue) => {
	// 	if (!Number(vlue)) return '';

	// 	const amount = new Intl.NumberFormat('pt-BR', {
	// 		style: 'currency',
	// 		currency: 'BRL',
	// 	}).format(vlue / 100);

	// 	return `${amount}`;
	// };

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
