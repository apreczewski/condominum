import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Item = ({ item }) => (
	<View style={styles.container}>
		<View style={styles.row1}>
			<Text style={styles.title}>Condomínio atual selecionado</Text>
		</View>
		<View style={styles.row2}>
			<Text style={styles.subTitle}>{item}</Text>
		</View>
	</View>
);

export default Item;

Item.propTypes = {
	item: PropTypes.string,
};

Item.defaultProps = {
	item: '',
};
