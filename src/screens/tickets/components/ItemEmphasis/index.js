import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { EvilIcons, MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Pallete, Colors } from '../../../../lib/constants';
import styles from './styles';
import { ValueFormat } from '../../../../lib/utils/formatCurrency';

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

export const ItemEmphasis = ({ onPress, item }) => (
	<TouchableOpacity activeOpacity={0.8} onPress={onPress}>
		<View style={styles({}).container}>
			<View style={styles({}).bodyLeft}>
				<ValueFormat style={styles({}).h1} value={item?.valor} />

				<View style={styles({}).row}>
					<Text style={styles({}).h3}>Vencimento:</Text>
					<Text style={Pallete.h3}>
						{moment(
							item?.vencimento,
							'DD-MM-YYYY HH: mm: ss',
						).format('DD/MM/YYYY')}
					</Text>
				</View>

				<View
					style={
						styles({
							borderColor: colors[item?.situacao],
						}).label
					}>
					<EvilIcons
						name={icon[item?.situacao]}
						size={30}
						color={colors[item?.situacao]}
					/>
					<Text
						style={
							styles({
								color: colors[item?.situacao],
							}).text
						}>
						{item?.situacao}
					</Text>
				</View>
			</View>

			<View style={styles({}).bodyRight}>
				<MaterialIcons
					name="arrow-forward-ios"
					color={Colors.secondary}
					size={30}
				/>
			</View>
		</View>
	</TouchableOpacity>
);

ItemEmphasis.propTypes = {
	onPress: PropTypes.func.isRequired,
	item: PropTypes.shape({
		id: PropTypes.number,
		valor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		situacao: PropTypes.string,
		vencimento: PropTypes.string,
	}),
};

ItemEmphasis.defaultProps = {
	item: {
		id: 0,
		valor: '',
		situacao: '',
		vencimento: '',
	},
};
