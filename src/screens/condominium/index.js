import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import RadioButton from '../../components/RadioButton';
import { Pallete, Strings } from '../../lib/constants';

import styles from './styles';

export function CondominiumScreen() {
	const condominiums = [
		{
			id: '1',
			name: 'Condomínio Las Palmas',
		},
		{
			id: '2',
			name: 'Condomínio Cruzeiro',
		},
		{
			id: '3',
			name: 'Condomínio Vila Real',
		},
		{
			id: '4',
			name: 'Condomínio Verdes',
		},
	];
	const [condominiumCurrent, setCondominiumCurrent] = useState(null);

	const handleSelectCondominium = (data) => {
		setCondominiumCurrent(data);
	};

	return (
		<ScrollView vertical>
			<View style={Pallete.screen}>
				<View style={styles.container}>
					<View style={styles.row1}>
						<Text style={styles.title}>
							{Strings.currentCondominiumSelected}
						</Text>
					</View>
					<View style={styles.row2}>
						<Text style={styles.subTitle}>
							{condominiumCurrent?.name}
						</Text>
					</View>
				</View>

				<FlatList
					data={condominiums}
					renderItem={({ item }) => (
						<View style={styles.cardAmbient}>
							<RadioButton
								label={item.name}
								onPress={() => handleSelectCondominium(item)}
								select={condominiumCurrent?.id === item.id}
							/>
						</View>
					)}
				/>
				<View style={styles.viewButtons}>
					<Button
						text={Strings.condominiumExchange}
						// onPress=""
						disabled={!condominiumCurrent?.select}
					/>
				</View>
			</View>
		</ScrollView>
	);
}
