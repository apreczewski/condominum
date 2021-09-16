import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { Pallete } from '../../lib/constants';
import styles from './styles';
import { ValueFormat } from '../../lib/utils/formatCurrency';

const FeaturedItem = ({ onPress, item, iconName, iconColor, iconSize }) => (
	<Pressable onPress={onPress}>
		<View style={styles.container}>
			<View style={styles.bodyLeft}>
				<Text style={styles.text}>{item.data}</Text>

				<View style={styles.textInfo}>
					<Text style={Pallete.paragraph}>Saldo Anterior</Text>
					<ValueFormat
						style={Pallete.paragraph}
						value={item.saldo_anterior}
					/>
				</View>

				<View style={styles.textInfo}>
					<Text style={Pallete.paragraph}>Pagamentos</Text>
					<ValueFormat
						style={Pallete.paragraph}
						value={item.pagamentos}
					/>
				</View>

				<View style={styles.textInfo}>
					<Text style={Pallete.paragraph}>Recebimentos</Text>
					<ValueFormat
						style={Pallete.paragraph}
						value={item.rebimentos}
					/>
				</View>

				<View style={styles.label}>
					<Text style={Pallete.paragraph}>Saldo</Text>

					<ValueFormat style={Pallete.paragraph} value={item.saldo} />
				</View>
			</View>
			<View style={styles.bodyRight}>
				<MaterialIcons
					name={iconName}
					size={iconSize}
					color={iconColor}
				/>
			</View>
		</View>
	</Pressable>
);

export default FeaturedItem;

FeaturedItem.propTypes = {
	onPress: PropTypes.func.isRequired,
	item: PropTypes.shape({
		data: PropTypes.string,
		saldo_anterior: PropTypes.number,
		pagamentos: PropTypes.number,
		rebimentos: PropTypes.number,
		saldo: PropTypes.number,
	}).isRequired,
	iconName: PropTypes.string.isRequired,
	iconColor: PropTypes.string.isRequired,
	iconSize: PropTypes.string.isRequired,
};
