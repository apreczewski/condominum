import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, EvilIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { Colors, Pallete } from '../../../../lib/constants';
import { ValueFormat } from '../../../../lib/utils/formatCurrency';
import styles from './styles';

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

export const Item = ({ onPress, item, isLast }) => (
	<TouchableOpacity activeOpacity={0.8} onPress={onPress}>
		<View style={styles({ isLast }).container}>
			<View style={styles({}).bodyLeft}>
				<ValueFormat style={styles({}).value} value={item.value} />
				<View style={styles({}).rowTicket}>
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
		value: PropTypes.number,
		name: PropTypes.string,
		state: PropTypes.number,
		dueDate: PropTypes.string,
	}).isRequired,
};

Item.defaultProps = {
	isLast: false,
};
