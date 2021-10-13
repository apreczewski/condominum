import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { Pallete } from '../../lib/constants';

export const HeaderHome = ({ title, user, subTitle }) => (
	<>
		<View style={styles.row}>
			<Text style={Pallete.h1}>{title}, </Text>
			<Text style={Pallete.h1}>{user}!</Text>
		</View>
		<Text style={Pallete.paragraphSecundary}>{subTitle}</Text>
	</>
);

HeaderHome.propTypes = {
	title: PropTypes.string,
	user: PropTypes.string,
	subTitle: PropTypes.string,
};

HeaderHome.defaultProps = {
	title: '',
	user: '',
	subTitle: '',
};
