import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import { Colors } from '../../../../lib/constants';

import styles from './styles';

const Item = ({ onPress, item }) => (
	<TouchableOpacity
		style={styles.container}
		onPress={onPress}
		activeOpacity={0.7}>
		<View style={styles.left}>
			<Text style={styles.title}>{item.titulo}</Text>
			{/* <Text style={styles.text}>{item.texto}</Text> */}
		</View>
		<View style={styles.right}>
			<AntDesign name="right" size={20} color={Colors.primary_400} />
		</View>
	</TouchableOpacity>
);

Item.propTypes = {
	onPress: PropTypes.func.isRequired,
	item: PropTypes.shape({ titulo: PropTypes.string, texto: PropTypes.string })
		.isRequired,
};

export default Item;
