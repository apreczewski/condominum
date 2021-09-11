import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { Colors, Pallete } from '../../../../lib/constants';
import styles from './styles';
import { ValueFormat } from '../../../../lib/utils/formatCurrency';

const DetailsItem = ({ onPress, item }) => (
	<TouchableOpacity onPress={onPress}>
		<View key={item.id} style={styles.container}>
			<View style={styles.bodyLeft}>
				<Text style={styles.date}>{item.data}</Text>
				<View style={styles.saldo}>
					<Text style={Pallete.paragraph}>Saldo: </Text>
					<ValueFormat style={Pallete.paragraph} value={item.saldo} />
				</View>
			</View>
			<View style={styles.bodyRight}>
				<MaterialIcons
					name="arrow-forward-ios"
					size={30}
					color={Colors.secondary}
				/>
			</View>
		</View>
	</TouchableOpacity>
);

export default DetailsItem;

DetailsItem.propTypes = {
	onPress: PropTypes.func.isRequired,
	item: PropTypes.shape({
		id: PropTypes.number,
		data: PropTypes.string,
		saldo: PropTypes.number,
	}).isRequired,
};
