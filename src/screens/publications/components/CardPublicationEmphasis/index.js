import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import * as Navigation from '../../../../lib/utils/navigation';
import styles from './styles';
import Images from '../../../../lib/constants/images';

const CardPublicationEmphasis = ({ /* url */ title, baseboard }) => (
	<TouchableOpacity
		onPress={() => Navigation.navigate('PublicationExpanded')}>
		<View style={styles.container}>
			<Image source={Images.publication} style={styles.image} />

			<Text style={styles.title}>{title}</Text>

			<Text style={styles.baseboard}>{baseboard}</Text>
		</View>
	</TouchableOpacity>
);

export default CardPublicationEmphasis;

CardPublicationEmphasis.propTypes = {
	// url: PropTypes.string,
	title: PropTypes.string,
	baseboard: PropTypes.string,
};

CardPublicationEmphasis.defaultProps = {
	// url: '',
	title: '',
	baseboard: '',
};
