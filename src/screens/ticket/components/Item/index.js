import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, EvilIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { Colors, Pallete } from '../../../../lib/constants';
import styles from './styles';
import { ValueFormat } from '../../../../lib/utils/formatCurrency';
import * as RootNavigator from '../../../../lib/utils/navigation';

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

const Item = ({ name, value, dueDate, state }) => (
	<TouchableOpacity onPress={() => RootNavigator.navigate('TicketDetails')}>
		<View style={styles({}).container}>
			<View style={styles({}).bodyLeft}>
				<ValueFormat style={styles({}).value} value={value} />
				<View style={styles({}).row_ticket}>
					<Text style={styles({}).h3}>Vencimento:</Text>
					<Text style={Pallete.h3}>{dueDate}</Text>
				</View>

				<View style={styles({ borderColor: colors[state] }).label}>
					<EvilIcons
						name={icon[state]}
						size={30}
						color={colors[state]}
					/>
					<Text style={styles({ color: colors[state] }).text}>
						{name}
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

export default Item;

Item.propTypes = {
	value: PropTypes.number,
	dueDate: PropTypes.string,
	state: PropTypes.string,
	name: PropTypes.string,
};

Item.defaultProps = {
	value: 0,
	dueDate: '',
	state: '',
	name: '',
};
