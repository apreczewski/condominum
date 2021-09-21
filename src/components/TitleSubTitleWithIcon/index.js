import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
// import { MaterialIcons } from '@expo/vector-icons';
import TitleWithSubTitle from '../TitleWithSubTitle';
import styles from './styles';
// import { Colors } from '../../lib/constants';

const TitleSubTitleWithIcon = ({ title, subTitle, children }) => (
	<View style={styles.row}>
		<TitleWithSubTitle title={title} subTitle={subTitle} />
		<View>{children}</View>
		{/* <MaterialIcons name={iconName} size={50} color={Colors.secondary} /> */}
	</View>
);

export default TitleSubTitleWithIcon;

TitleSubTitleWithIcon.propTypes = {
	title: PropTypes.string,
	subTitle: PropTypes.string,
	children: PropTypes.element,
};

TitleSubTitleWithIcon.defaultProps = {
	title: '',
	subTitle: '',
	children: undefined,
};
