import React from 'react';
import { View, FlatList, ScrollView, Text } from 'react-native';
import PropTypes from 'prop-types';
import RadioButton from '../../../../components/RadioButton';
import Button from '../../../../components/Button';
import styles from './styles';
import { Strings } from '../../../../lib/constants';

export default function Item({ current, select, condominium, onSelect }) {
	return (
		<ScrollView>
			<View style={styles.container}>
				<View style={styles.row1}>
					<Text style={styles.title}>
						Condomínio atual selecionado
					</Text>
				</View>
				<View style={styles.row2}>
					<Text style={styles.subTitle}>{current.name}</Text>
				</View>
			</View>

			<FlatList
				data={condominium}
				renderItem={({ item }) => (
					<View style={styles.cardAmbient}>
						<RadioButton
							label={item.name}
							onPress={() => onSelect(item)}
							select={select?.id === item.id}
						/>
					</View>
				)}
			/>
			<View style={styles.viewButtons}>
				<Button
					text={Strings.condominiumExchange}
					// onPress=""
					disabled={!select}
				/>
			</View>
		</ScrollView>
	);
}

Item.propTypes = {
	select: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({})])
		.isRequired,
	onSelect: PropTypes.func.isRequired,
	condominium: PropTypes.arrayOf(PropTypes.shape({})),
	current: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({})])
		.isRequired,
};

Item.defaultProps = {
	condominium: [],
};
