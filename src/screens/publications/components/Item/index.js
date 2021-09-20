import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Item = ({ onPress, item }) => (
	<TouchableOpacity activeOpacity={0.8} onPress={onPress}>
		<View style={styles.container}>
			<Text style={styles.title}>{item.title}</Text>
			<Text style={styles.subTitle}>{item.subTitle}</Text>

			<Text style={styles.seeMore}>{item.seeMore}</Text>
			<Text style={styles.baseboard}>{item.date}</Text>
		</View>
	</TouchableOpacity>
);

export default Item;

Item.propTypes = {
	onPress: PropTypes.func.isRequired,
	item: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		seeMore: PropTypes.string,
		date: PropTypes.string,
	}).isRequired,
};
