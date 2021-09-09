import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { Colors, Pallete } from '../../../../lib/constants';
import * as Navigation from '../../../../lib/utils/navigation';
import styles from './styles';
import { ValueFormat } from '../../../../components/FormatCurrency';

const Card = ({ id, data, saldo }) => (
	<TouchableOpacity onPress={() => Navigation.navigate('BalanceDetails')}>
		<View key={id} style={styles.container}>
			<View style={styles.bodyLeft}>
				<Text style={styles.date}>{data}</Text>
				<View style={styles.saldo}>
					<Text style={Pallete.paragraph}>Saldo: </Text>
					<ValueFormat style={Pallete.paragraph} value={saldo} />
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

export default Card;

Card.propTypes = {
	id: PropTypes.number,
	data: PropTypes.string,
	saldo: PropTypes.number,
};

Card.defaultProps = {
	id: '',
	data: '',
	saldo: 0,
};
