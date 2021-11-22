import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Pallete } from '../../../../lib/constants';
import { ValueFormat } from '../../../../lib/utils/formatCurrency';

import styles from './styles';

export const ItemEmphasis = ({ onPress, item }) => (
	<Pressable onPress={onPress}>
		<View style={styles.container}>
			<Text
				style={
					styles.text
				}>{`${item?.mes}/${item?.ano} - ${item.tipo_descricao}`}</Text>

			<View style={styles.textInfo}>
				<Text style={Pallete.paragraph}>Saldo Anterior</Text>
				<ValueFormat
					style={Pallete.paragraph}
					value={parseFloat(item?.saldo_anterior)}
				/>
			</View>

			<View style={styles.textInfo}>
				<Text style={Pallete.paragraph}>Pagamentos</Text>
				<ValueFormat
					style={Pallete.paragraph}
					value={parseFloat(item?.total_pagamento)}
				/>
			</View>

			<View style={styles.textInfo}>
				<Text style={Pallete.paragraph}>Recebimentos</Text>
				<ValueFormat
					style={Pallete.paragraph}
					value={parseFloat(item?.total_recebimento)}
				/>
			</View>

			<View style={styles.label}>
				<Text style={Pallete.paragraph}>Saldo</Text>

				<ValueFormat
					style={Pallete.paragraph}
					value={parseFloat(item?.saldo_atual)}
				/>
			</View>

			<View style={styles.anchorSeeMore}>
				<Text style={styles.textSeeMore}>Ver detalhes </Text>
				<MaterialIcons
					name="arrow-forward-ios"
					size={25}
					color={Colors.secondary}
				/>
			</View>
		</View>
	</Pressable>
);

ItemEmphasis.propTypes = {
	onPress: PropTypes.func.isRequired,
	item: PropTypes.shape({
		mes: PropTypes.number,
		ano: PropTypes.number,
		tipo_descricao: PropTypes.string,
		total_pagamento: PropTypes.string,
		total_recebimento: PropTypes.string,
		saldo_anterior: PropTypes.string,
		saldo_atual: PropTypes.string,
	}).isRequired,
};
