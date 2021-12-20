import React from 'react';
import { View, Text /* Pressable */ } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import { Colors, Pallete } from '../../../../lib/constants';
import { ValueFormat } from '../../../../lib/utils/formatCurrency';

import styles from './styles';

export const ItemEmphasis = ({ /* onPress, */ item }) => (
	<View style={styles({}).container}>
		{item?.mes !== undefined && (
			<View style={styles({}).bodyLeft}>
				<Text
					style={
						styles({}).text
					}>{`${item?.mes}/${item?.ano} - ${item?.tipo_descricao}`}</Text>

				<View style={styles({}).textInfo}>
					<Text style={Pallete.paragraph}>Saldo Anterior:</Text>
					<ValueFormat
						style={
							parseFloat(item?.saldo_anterior) < 0
								? styles({ color: Colors.primary }).paragraph
								: styles({ color: Colors.secondary }).paragraph
						}
						value={parseFloat(item?.saldo_anterior)}
					/>
				</View>

				<View style={styles({}).textInfo}>
					<Text style={Pallete.paragraph}>Pagamentos:</Text>
					<ValueFormat
						style={
							parseFloat(item?.total_pagamento) < 0
								? styles({ color: Colors.primary }).paragraph
								: styles({ color: Colors.secondary }).paragraph
						}
						value={parseFloat(item?.total_pagamento)}
					/>
				</View>

				<View style={styles({}).textInfo}>
					<Text style={Pallete.paragraph}>Recebimentos:</Text>
					<ValueFormat
						style={
							parseFloat(item?.total_recebimento) < 0
								? styles({ color: Colors.primary }).paragraph
								: styles({ color: Colors.secondary }).paragraph
						}
						value={parseFloat(item?.total_recebimento)}
					/>
				</View>

				<View style={styles({}).label}>
					<Text style={Pallete.paragraph}>Saldo:</Text>

					<ValueFormat
						style={
							parseFloat(item?.saldo_atual) < 0
								? styles({ color: Colors.primary }).paragraph
								: styles({ color: Colors.secondary }).paragraph
						}
						value={parseFloat(item?.saldo_atual)}
					/>
				</View>
			</View>
		)}

		<View style={styles({}).bodyRight}>
			{/* <Pressable onPress={onPress}>
				<View style={styles({}).anchorShare}>
					<MaterialIcons
						name="share"
						size={30}
						color={Colors.primary}
					/>
					<Text style={styles({}).textShare}>Compartilhar</Text>
					<Text style={styles({}).textShare}>pdf</Text>
				</View>
			</Pressable> */}
		</View>
	</View>
);

ItemEmphasis.propTypes = {
	// onPress: PropTypes.func,
	item: PropTypes.shape({
		mes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		ano: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		tipo_descricao: PropTypes.string,
		saldo_anterior: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number,
		]),
		total_pagamento: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number,
		]),
		total_recebimento: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number,
		]),
		saldo_atual: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	}),
};

ItemEmphasis.defaultProps = {
	// onPress: () => {},
	item: {
		mes: '' || 0,
		ano: '' || 0,
		tipo_descricao: '',
		saldo_anterior: '' || 0,
		total_pagamento: '' || 0,
		total_recebimento: '' || 0,
		saldo_atual: '' || 0,
	},
};
