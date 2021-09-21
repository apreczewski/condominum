import React from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { ValueFormat } from '../../../../lib/utils/formatCurrency';
import Ticket from '../../../tickets/data.json';

const DetailsItem = ({ id }) => (
	<View style={styles.container}>
		<Text style={styles.details}>Valores detalhados </Text>
		<FlatList
			refreshControl={<RefreshControl />}
			data={Ticket[id].details}
			renderItem={({ item }) => (
				<View style={styles.row_ticket}>
					<Text style={styles.h3}>{item.text}</Text>
					<ValueFormat style={styles.value} value={item.value} />
				</View>
			)}
		/>
	</View>
);

export default DetailsItem;

DetailsItem.propTypes = {
	id: PropTypes.number,
};

DetailsItem.defaultProps = {
	id: 0,
};
