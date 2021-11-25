import React from 'react';
import moment from 'moment';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export const ItemEmphasis = ({ item, onPress, isLast }) => (
	<TouchableOpacity activeOpacity={0.8} onPress={onPress}>
		<View style={styles({ isLast }).container}>
			<View style={styles({}).content}>
				<Image
					style={styles({}).image}
					source={{ uri: item?.imagem }}
				/>
				<Text style={styles({}).seeMore}>Ver mais...</Text>
			</View>

			<Text style={styles({}).title}>{item?.titulo}</Text>

			<Text style={styles({}).baseboard}>
				{moment(item?.dt_pub_inicio, 'DD-MM-YYYY HH: mm: ss').format(
					'DD/MM/YYYY',
				)}
			</Text>
		</View>
	</TouchableOpacity>
);

ItemEmphasis.propTypes = {
	onPress: PropTypes.func.isRequired,
	isLast: PropTypes.bool,
	item: PropTypes.shape({
		imagem: PropTypes.string,
		titulo: PropTypes.string,
		dt_pub_inicio: PropTypes.string,
	}),
};

ItemEmphasis.defaultProps = {
	isLast: false,
	item: {
		imagem: '',
		titulo: '',
		dt_pub_inicio: '',
	},
};
