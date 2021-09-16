import React from 'react';
import { View, Text } from 'react-native';
// import { MaterialIcons, EvilIcons } from '@expo/vector-icons';
// import PropTypes from 'prop-types';
// import { Colors, Pallete } from '../../../../lib/constants';
import styles from './styles';
// import { ValueFormat } from '../../../../lib/utils/formatCurrency';
import { ValueFormat } from '../../../../lib/utils/formatCurrency';

/* const icon = {
	0: 'clock',
	1: 'close-o',
	2: 'check',
};

const colors = {
	0: Colors.secondary,
	1: Colors.primary,
	2: Colors.green,
}; */

const Item = () => (
	<View style={styles.container}>
		<Text style={styles.details}>Valores detalhados </Text>
		<View style={styles.row_ticket}>
			<Text style={styles.h3}>Agua e esgoto:</Text>
			<ValueFormat style={styles.h3} value={1.82} />
		</View>
	</View>
);

export default Item;

/* Item.propTypes = {
	value: PropTypes.number,
	dueDate: PropTypes.string,
	state: PropTypes.string,
	type: PropTypes.string,
};

Item.defaultProps = {
	value: 0,
	dueDate: '',
	state: '',
	type: '',
};
*/
