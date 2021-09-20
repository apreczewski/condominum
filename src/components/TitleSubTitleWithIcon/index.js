import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import TitleWithSubTitle from '../TitleWithSubTitle';
import styles from './styles';

const TitleSubTitleWithIcon = ({ title, subTitle, children }) => (
	<View style={styles.row}>
		<TitleWithSubTitle title={title} subTitle={subTitle} />
		<View>{children}</View>
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
