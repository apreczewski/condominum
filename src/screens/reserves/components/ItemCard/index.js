import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Feather } from '@expo/vector-icons';

import { Pallete, Colors } from '../../../../lib/constants';

import styles from './styles';

const ItemCard = ({ item, onDelete }) => (
	<View style={styles.card}>
		<View style={styles.viewContent}>
			<Image
				source={{ uri: item.image }}
				resizeMode="cover"
				style={styles.img}
			/>
			<View style={styles.viewText}>
				<Text style={Pallete.h5Primary}>{item.title}</Text>
				<Text style={Pallete.paragraph}>{item.data}</Text>
				<Text style={Pallete.paragraph}>{item.status}</Text>
			</View>
		</View>
		<TouchableOpacity onPress={() => onDelete()}>
			<Feather name="trash-2" size={24} color={Colors.primary} />
		</TouchableOpacity>
	</View>
);
ItemCard.propTypes = {
	item: PropTypes.shape({
		title: PropTypes.string,
		data: PropTypes.string,
		status: PropTypes.string,
		image: PropTypes.string,
	}).isRequired,
	onDelete: PropTypes.func.isRequired,
};

export default ItemCard;
