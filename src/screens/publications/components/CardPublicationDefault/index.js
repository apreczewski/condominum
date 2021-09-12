import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import * as Navigation from '../../../../lib/utils/navigation';
import styles from './styles';

const CardPublicationDefault = ({ title, subTitle, seeMore, baseboard }) => (
	<View style={styles.container}>
		<Text style={styles.title}>{title}</Text>
		<Text style={styles.subTitle}>{subTitle}</Text>
		<TouchableOpacity
			style={styles.navigation}
			onPress={() => Navigation.navigate('PublicationExpandedScreen')}>
			<Text style={styles.seeMore}>{seeMore}</Text>
		</TouchableOpacity>
		<Text style={styles.baseboard}>{baseboard}</Text>
	</View>
);

export default CardPublicationDefault;

CardPublicationDefault.propTypes = {
	title: PropTypes.string,
	subTitle: PropTypes.string,
	seeMore: PropTypes.string,
	baseboard: PropTypes.string,
};

CardPublicationDefault.defaultProps = {
	title: '',
	subTitle: '',
	seeMore: '',
	baseboard: '',
};
