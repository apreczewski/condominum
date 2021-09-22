import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { EvilIcons } from '@expo/vector-icons';

import { Colors } from '../../../../lib/constants';
import { ValueFormat } from '../../../../lib/utils/formatCurrency';

import styles from './styles';

export function ItemEmphasis({ item }) {
	const icon = {
		0: 'clock',
		1: 'close-o',
		2: 'check',
	};

	const colors = {
		0: Colors.secondary,
		1: Colors.primary,
		2: Colors.green,
	};

	return (
		<View style={styles({}).container}>
			<ValueFormat style={styles({}).text} value={item?.value} />

			<View style={styles({}).row}>
				<Text style={styles({}).pay}>Vencimento</Text>
				<Text style={styles({}).date}>{item.dueDate}</Text>
			</View>

			<View style={styles({ borderColor: colors[item.state] }).label}>
				<EvilIcons
					name={icon[item.state]}
					size={30}
					color={colors[item.state]}
				/>
				<Text style={styles({ color: colors[item.state] }).textStatus}>
					{item.name}
				</Text>
			</View>
		</View>
	);
}

ItemEmphasis.propTypes = {
	item: PropTypes.shape({
		value: PropTypes.number,
		name: PropTypes.string,
		state: PropTypes.number,
		dueDate: PropTypes.string,
	}).isRequired,
};
