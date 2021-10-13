import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export const ItemEmphasis = ({ item, onPress, isLast }) => (
	<TouchableOpacity activeOpacity={0.8} onPress={onPress}>
		<View style={styles({ isLast }).container}>
			<View style={styles({}).content}>
				<Image style={styles({}).image} source={item?.imagem} />
				<Text style={styles({}).seeMore}>Ver mais...</Text>
			</View>

			<Text style={styles({}).title}>{item?.titulo}</Text>
			<Text style={styles({}).baseboard}>{item?.dt_pub_fim}</Text>
		</View>
	</TouchableOpacity>
);

ItemEmphasis.propTypes = {
	onPress: PropTypes.func.isRequired,
	isLast: PropTypes.bool,
	item: PropTypes.shape({
		imagem: PropTypes.string,
		titulo: PropTypes.string,
		dt_pub_fim: PropTypes.string,
	}).isRequired,
};

ItemEmphasis.defaultProps = {
	isLast: false,
};
