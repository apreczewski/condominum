import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { Pallete } from '../../lib/constants';

const greetingMessage = () => {
	const h = new Date().getHours();
	if (h <= 5) return 'Boa madrugada';
	if (h < 12) return 'Bom dia';
	if (h < 18) return 'Boa tarde';
	return 'Boa noite';
};

export const HeaderHome = ({ user, subTitle }) => (
	<>
		<View style={styles.row}>
			<Text style={Pallete.h1}>{greetingMessage()}, </Text>
			<Text style={Pallete.h1}>{user}!</Text>
		</View>
		<Text style={Pallete.paragraphSecundary}>{subTitle}</Text>
	</>
);

HeaderHome.propTypes = {
	user: PropTypes.string,
	subTitle: PropTypes.string,
};

HeaderHome.defaultProps = {
	user: '',
	subTitle: '',
};
