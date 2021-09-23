import React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import { Pallete } from '../../lib/constants';
import Item from './components/Item';
import styles from './styles';

export default function CondominiumScreen() {
	const [value, setValue] = React.useState('Condomínio Vila Real');

	return (
		<View style={Pallete.screen}>
			<Item item={value} />
			<RadioButton.Group
				onValueChange={(newValue) => setValue(newValue)}
				value={value}>
				<View style={styles.container}>
					<Text style={styles.text}>Condomínio Las Palmas</Text>
					<RadioButton value="Condomínio Las Palmas" />
				</View>
				<View style={styles.container}>
					<Text style={styles.text}>Condomínio Cruzeiro</Text>
					<RadioButton value="Condomínio Cruzeiro" />
				</View>
				<View style={styles.container}>
					<Text style={styles.text}>Condomínio Vila Real</Text>
					<RadioButton value="Condomínio Vila Real" />
				</View>
				<View style={styles.container}>
					<Text style={styles.text}>Condomínio Verdes</Text>
					<RadioButton value="Condomínio Verdes" />
				</View>
			</RadioButton.Group>
		</View>
	);
}
