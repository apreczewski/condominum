import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import publication from '../../../../assets/images/publication.png';

export const PublicationEmphasis = ({ item, onPress }) => (
	<TouchableOpacity onPress={onPress}>
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

PublicationEmphasis.propTypes = {
	onPress: PropTypes.func.isRequired,
	item: PropTypes.shape({
		id: PropTypes.string,
		url: PropTypes.string,
		title: PropTypes.string,
		baseboard: PropTypes.string,
	}).isRequired,
};
