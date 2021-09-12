import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import * as Navigation from '../../../../lib/utils/navigation';
import styles from './styles';
import Images from '../../../../lib/constants/images';

const CardPublicationEmphasis = ({ /* url */ title, baseboard }) => (
	<TouchableOpacity onPress={() => Navigation.navigate('')}>
		<View style={styles.container}>
			<View style={styles.containerImage}>
				<Image source={Images.publication} style={styles.image} />
			</View>
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
