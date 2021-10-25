import React from 'react';
import { View, Text, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import { EvilIcons } from '@expo/vector-icons';
import moment from 'moment';

import { Colors } from '../../../../lib/constants';
import { ValueFormat } from '../../../../lib/utils/formatCurrency';

import styles from './styles';

export function ItemEmphasis({ onPress, item }) {
	const icon = {
		'aguardando pagamento': 'clock',
		atrasado: 'close-o',
		pago: 'check',
	};

	const colors = {
		'aguardando pagamento': Colors.secondary,
		atrasado: Colors.primary,
		pago: Colors.green,
	};

	return (
		<Pressable onPress={onPress}>
			<View style={styles({}).container}>
				<ValueFormat style={styles({}).text} value={item?.valor} />

				<View style={styles({}).row}>
					<Text style={styles({}).pay}>Vencimento</Text>
					<Text style={styles({}).date}>
						{moment(
							item?.vencimento,
							'DD-MM-YYYY HH: mm: ss',
						).format('DD/MM/YYYY')}
					</Text>
				</View>

				<View
					style={
						styles({ borderColor: colors[item?.situacao] }).label
					}>
					<EvilIcons
						name={icon[item?.situacao]}
						size={30}
						color={colors[item?.situacao]}
					/>
					<Text
						style={
							styles({ color: colors[item?.situacao] }).textStatus
						}>
						{item?.situacao}
					</Text>
				</View>
			</View>
		</Pressable>
	);
}

ItemEmphasis.propTypes = {
	onPress: PropTypes.func.isRequired,
	item: PropTypes.shape({
		valor: PropTypes.string,
		situacao: PropTypes.string,
		vencimento: PropTypes.string,
	}).isRequired,
};
