import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, EvilIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Colors, Pallete } from '../../../../lib/constants';
import { ValueFormat } from '../../../../lib/utils/formatCurrency';
import styles from './styles';

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

export const Item = ({ onPress, item, isLast }) => (
	<TouchableOpacity activeOpacity={0.8} onPress={onPress}>
		<View style={styles({ isLast }).container}>
			<View style={styles({}).bodyLeft}>
				<ValueFormat style={styles({}).value} value={item.valor} />
				<View style={styles({}).rowTicket}>
					<Text style={Pallete.h3}>
						{moment(
							item?.vencimento,
							'DD-MM-YYYY HH: mm: ss',
						).format('DD/MM/YYYY')}
					</Text>
				</View>

				<View
					style={
						styles({ borderColor: colors[item.situacao] }).label
					}>
					<EvilIcons
						name={icon[item.situacao]}
						size={30}
						color={colors[item.situacao]}
					/>
					<Text style={styles({ color: colors[item.situacao] }).text}>
						{item.situacao}
					</Text>
				</View>
			</View>

			<View style={styles({}).bodyRight}>
				<MaterialIcons
					name="arrow-forward-ios"
					size={30}
					color={Colors.secondary}
				/>
			</View>
		</View>
	</TouchableOpacity>
);

Item.propTypes = {
	onPress: PropTypes.func.isRequired,
	isLast: PropTypes.bool,
	item: PropTypes.shape({
		id: PropTypes.number,
		valor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		situacao: PropTypes.string,
		vencimento: PropTypes.string,
	}),
};

Item.defaultProps = {
	isLast: false,
	item: {
		id: 0,
		valor: '' || 0,
		situacao: '',
		vencimento: '',
	},
};
