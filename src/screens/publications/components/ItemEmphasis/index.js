import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import publication from '../../../../assets/images/publication.png';

export const ItemEmphasis = ({ item, onPress }) => (
	<TouchableOpacity activeOpacity={0.8} onPress={onPress}>
		<View style={styles.container}>
			<View style={styles.content}>
				<Image style={styles.image} source={publication} />
				<Text style={styles.seeMore}>Ver mais...</Text>
			</View>

			<Text style={styles.title}>{item.title}</Text>
			<Text style={styles.baseboard}>{item.baseboard}</Text>
		</View>
	</TouchableOpacity>
);

ItemEmphasis.propTypes = {
	onPress: PropTypes.func.isRequired,
	item: PropTypes.shape({
		id: PropTypes.string,
		url: PropTypes.string,
		title: PropTypes.string,
		baseboard: PropTypes.string,
	}).isRequired,
};
