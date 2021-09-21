import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';
import TitleWithSubTitle from '../TitleWithSubTitle';
import styles from './styles';
import { Colors } from '../../lib/constants';

const TitleSubTitleWithIcon = ({ title, subTitle, iconName }) => (
	<View style={styles.row}>
		<TitleWithSubTitle title={title} subTitle={subTitle} />
		<MaterialIcons name={iconName} size={50} color={Colors.secondary} />
	</View>
);

export default TitleSubTitleWithIcon;

TitleSubTitleWithIcon.propTypes = {
	title: PropTypes.string,
	subTitle: PropTypes.string,
	iconName: PropTypes.string,
};

TitleSubTitleWithIcon.defaultProps = {
	title: '',
	subTitle: '',
	iconName: '',
};
