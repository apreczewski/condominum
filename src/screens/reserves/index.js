import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as Navigation from '../../lib/utils/navigation';

import { Pallete, Strings, Colors } from '../../lib/constants';

import ItemCard from './components/ItemCard';

import styles from './styles';

const data = [
	{
		id: '1',
		title: 'Salão de festas 1',
		status: 'Solicitada',
		data: '24/08/2021 das 12:00 às 19:00',
		image: 'https://www.construtoraperini.com.br/wp-content/uploads/2015/09/wine65.png',
	},
	{
		id: '2',
		title: 'Salão de festas 2',
		status: 'Finalizada com pendências',
		data: '24/08/2021 das 12:00 às 19:00',
		image: 'https://www.construtoraperini.com.br/wp-content/uploads/2015/09/wine65.png',
	},
];

export default function ReservesScreen() {
	return (
		<View style={Pallete.screen}>
			<View style={styles.row}>
				<View>
					<Text style={Pallete.h1}>{Strings.reserve}</Text>
					<Text style={Pallete.paragraph}>
						{Strings.reserveDescription}
					</Text>
				</View>
				<TouchableOpacity
					style={styles.addBtn}
					onPress={() => Navigation.navigate('ReserveAdd')}>
					<MaterialCommunityIcons
						name="plus-circle-outline"
						size={27}
						color={Colors.primary}
					/>
					<Text style={styles.addText}>{Strings.add}</Text>
				</TouchableOpacity>
			</View>
			<FlatList
				data={data}
				style={styles.list}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<ItemCard item={item} onDelete={() => {}} />
				)}
			/>
		</View>
	);
}
