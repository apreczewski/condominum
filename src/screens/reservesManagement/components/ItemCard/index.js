import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import { Pallete, Colors } from '../../../../lib/constants';

import styles from './styles';

const ItemCard = ({ item, onDelete, onConfirm, onFinish }) => (
	<View style={styles.card}>
		<View style={styles.viewContent}>
			<Image
				source={{ uri: item.image }}
				resizeMode="cover"
				style={styles.img}
			/>
			<View style={styles.viewText}>
				<Text style={Pallete.h5Primary}>{item.title}</Text>
				<Text style={Pallete.paragraph}>
					{`${item.date} das ${item.start} ás ${item.end}`}
				</Text>
				<Text style={Pallete.paragraph}>{item.client}</Text>
				<Text style={Pallete.paragraph}>{item.status}</Text>
			</View>
		</View>
		<View>
			<TouchableOpacity
				onPress={() => onDelete()}
				style={styles.marginBottom}>
				<Feather name="trash" size={22} color={Colors.primary} />
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => onConfirm()}
				style={styles.marginBottom}>
				<Feather name="check-circle" size={22} color={Colors.primary} />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => onFinish()}>
				<MaterialCommunityIcons
					name="calendar-check-outline"
					size={24}
					color={Colors.primary}
				/>
			</TouchableOpacity>
		</View>
	</View>
);
ItemCard.propTypes = {
	item: PropTypes.shape({
		title: PropTypes.string,
		date: PropTypes.string,
		start: PropTypes.string,
		end: PropTypes.string,
		status: PropTypes.string,
		image: PropTypes.string,
		client: PropTypes.string,
	}).isRequired,
	onDelete: PropTypes.func.isRequired,
	onFinish: PropTypes.func.isRequired,
	onConfirm: PropTypes.func.isRequired,
};

export default ItemCard;
