import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { EvilIcons, MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { Pallete, Colors } from '../../../../lib/constants';
import styles from './styles';
import { ValueFormat } from '../../../../lib/utils/formatCurrency';

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

export const ItemEmphasis = ({ onPress, item }) => (
	<TouchableOpacity activeOpacity={0.8} onPress={onPress}>
		<View style={styles({}).container}>
			<View style={styles({}).bodyLeft}>
				<ValueFormat style={styles({}).h1} value={item.value} />

				<View style={styles({}).row}>
					<Text style={styles({}).h3}>Vencimento:</Text>
					<Text style={Pallete.h3}>{item.dueDate}</Text>
				</View>

				<View style={styles({ borderColor: colors[item.state] }).label}>
					<EvilIcons
						name={icon[item.state]}
						size={30}
						color={colors[item.state]}
					/>
					<Text style={styles({ color: colors[item.state] }).text}>
						{item.name}
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
		value: PropTypes.number,
		name: PropTypes.string,
		state: PropTypes.string,
		dueDate: PropTypes.string,
	}).isRequired,
};
