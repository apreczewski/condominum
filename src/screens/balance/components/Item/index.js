import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { Colors, Pallete } from '../../../../lib/constants';
import styles from './styles';
import { ValueFormat } from '../../../../lib/utils/formatCurrency';

const Item = ({ onPress, item, isLast }) => (
	<TouchableOpacity activeOpacity={0.8} onPress={onPress}>
		<View style={styles({ isLast }).container}>
			<View style={styles({}).bodyLeft}>
				<Text style={styles({}).date}>{`${item.mes}/${item.ano}`}</Text>
				<View style={styles({}).saldo}>
					<Text style={Pallete.paragraph}>Saldo </Text>
					<ValueFormat
						style={Pallete.paragraph}
						value={parseFloat(item.saldo_atual)}
					/>
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

export default Item;

Item.propTypes = {
	onPress: PropTypes.func.isRequired,
	isLast: PropTypes.bool,
	item: PropTypes.shape({
		mes: PropTypes.number,
		ano: PropTypes.number,
		saldo_atual: PropTypes.string,
	}).isRequired,
};

Item.defaultProps = {
	isLast: false,
};
