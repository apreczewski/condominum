import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export const Item = ({ onPress, item, isLast }) => (
	<TouchableOpacity activeOpacity={0.8} onPress={onPress}>
		<View style={styles({ isLast }).container}>
			<Text style={styles({}).title}>{item?.titulo}</Text>
			<Text style={styles({}).subTitle}>{item?.texto_detalhado}</Text>

			<Text style={styles({}).baseboard}>{item?.dt_pub_fim}</Text>
		</View>
	</TouchableOpacity>
);

Item.propTypes = {
	onPress: PropTypes.func.isRequired,
	isLast: PropTypes.bool,
	item: PropTypes.shape({
		titulo: PropTypes.string,
		texto_detalhado: PropTypes.string,
		dt_pub_fim: PropTypes.string,
	}).isRequired,
};

Item.defaultProps = {
	isLast: false,
};
