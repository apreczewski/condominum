import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { Pallete } from '../../lib/constants';

const TitleWithSubTitle = ({ title, subTitle }) => (
	<View>
		<Text style={Pallete.h1}>{title}</Text>
		<Text style={Pallete.paragraphSecundary}>{subTitle}</Text>
	</View>
);

export default TitleWithSubTitle;

TitleWithSubTitle.propTypes = {
	title: PropTypes.string,
	subTitle: PropTypes.string,
};

TitleWithSubTitle.defaultProps = {
	title: '',
	subTitle: '',
};
