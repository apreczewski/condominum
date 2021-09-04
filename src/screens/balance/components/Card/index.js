import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { Colors } from '../../../../lib/constants';
import * as Navigation from '../../../../lib/utils/navigation';
import styles from './styles';

const Card = ({ id, data, saldo }) => (
	<View key={id} style={styles.container}>
		<View style={styles.bodyLeft}>
			<Text style={styles.header}>{data}</Text>
			<Text style={styles.h4}>{saldo}</Text>
		</View>
		<View style={styles.bodyRight}>
			<TouchableOpacity
				onPress={() => Navigation.navigate('BalanceDetails')}>
				<MaterialIcons
					name="arrow-forward-ios"
					size={30}
					color={Colors.secondary}
				/>
			</TouchableOpacity>
		</View>
	</View>
);

export default Card;

Card.propTypes = {
	id: PropTypes.number,
	data: PropTypes.string,
	saldo: PropTypes.string,
};

Card.defaultProps = {
	id: '',
	data: '',
	saldo: '',
};
