import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { MaterialIcons, EvilIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { Colors, Pallete, Strings } from '../../../../lib/constants';
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

const Item = ({ onPress, item }) => (
	<Pressable onPress={onPress}>
		<View style={styles({}).container}>
			<View style={styles({}).bodyLeft}>
				<ValueFormat style={styles({}).value} value={item.value} />
				<View style={styles({}).row_ticket}>
					<Text style={styles({}).h3}>{Strings.dueDate}</Text>
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
	</Pressable>
);

export default Item;

Item.propTypes = {
	onPress: PropTypes.func.isRequired,
	item: PropTypes.shape({
		value: PropTypes.number,
		name: PropTypes.string,
		state: PropTypes.string,
		dueDate: PropTypes.string,
	}).isRequired,
};
