import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import * as RootNavigator from '../../../../lib/utils/navigation';
// import {  } from '../../store/actions';

const CardPublicationDefault = ({ title, subTitle, seeMore, baseboard }) => (
	<TouchableOpacity
		onPress={() => RootNavigator.navigate('PublicationExpanded')}>
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.subTitle}>{subTitle}</Text>

			<Text style={styles.seeMore}>{seeMore}</Text>
			<Text style={styles.baseboard}>{baseboard}</Text>
		</View>
	</TouchableOpacity>
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
