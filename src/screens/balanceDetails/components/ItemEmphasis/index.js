import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import { Colors, Pallete } from '../../../../lib/constants';
import { ValueFormat } from '../../../../lib/utils/formatCurrency';

import styles from './styles';

export const ItemEmphasis = ({ onPress, item }) => (
	<Pressable onPress={onPress}>
		<View style={styles.container}>
			<View style={styles.bodyLeft}>
				<Text style={styles.text}>{`${item.mes}/${item.ano}`}</Text>

				<View style={styles.textInfo}>
					<Text style={Pallete.paragraph}>Saldo Anterior</Text>
					<ValueFormat
						style={Pallete.paragraph}
						value={item.saldo_anterior}
					/>
				</View>

				<View style={styles.textInfo}>
					<Text style={Pallete.paragraph}>Pagamentos</Text>
					<ValueFormat
						style={Pallete.paragraph}
						value={item.total_pagamento}
					/>
				</View>

				<View style={styles.textInfo}>
					<Text style={Pallete.paragraph}>Recebimentos</Text>
					<ValueFormat
						style={Pallete.paragraph}
						value={item.total_recebimento}
					/>
				</View>

				<View style={styles.label}>
					<Text style={Pallete.paragraph}>Saldo</Text>

					<ValueFormat
						style={Pallete.paragraph}
						value={item.saldo_atual}
					/>
				</View>
			</View>
			<View style={styles.bodyRight}>
				<View style={styles.anchorShare}>
					<MaterialIcons
						name="share"
						size={30}
						color={Colors.primary}
					/>
					<Text style={styles.textShare}>Compartilhar</Text>
				</View>
			</View>
		</View>
	</Pressable>
);

ItemEmphasis.propTypes = {
	onPress: PropTypes.func.isRequired,
	item: PropTypes.shape({
		mes: PropTypes.string,
		ano: PropTypes.string,
		saldo_anterior: PropTypes.number,
		total_pagamento: PropTypes.number,
		total_recebimento: PropTypes.number,
		saldo_atual: PropTypes.number,
	}).isRequired,
};
