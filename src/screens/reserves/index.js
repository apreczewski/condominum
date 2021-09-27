import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as Navigation from '../../lib/utils/navigation';

import { Pallete, Strings, Colors } from '../../lib/constants';

import ItemCard from './components/ItemCard';
import ModalCancel from './components/ModalCancel';

import styles from './styles';

const data = [
	{
		id: '1',
		title: 'Salão de festas 1',
		status: 'Solicitada',
		date: '24/08/2021',
		start: '08:00',
		end: '17:00',
		image: 'https://www.construtoraperini.com.br/wp-content/uploads/2015/09/wine65.png',
		tax: 'R$ 50,00',
		condo: 'Condomínio Las Palmas',
		client: 'João Paulo',
	},
	{
		id: '2',
		title: 'Salão de festas 2',
		status: 'Finalizada com pendências',
		date: '24/08/2021',
		start: '08:00',
		end: '17:00',
		image: 'https://www.construtoraperini.com.br/wp-content/uploads/2015/09/wine65.png',
		tax: 'R$ 50,00',
		condo: 'Condomínio Las Palmas',
		client: 'João Paulo',
	},
];

const reasons = [
	{
		id: '10',
		name: 'Desistência',
	},
	{
		id: '11',
		name: 'Mudança de temperatura',
	},
	{
		id: '13',
		name: 'Teste',
	},
];

export default function ReservesScreen() {
	const [selectItem, setSelectItem] = useState({});
	const [modalCancel, setModalCancel] = useState(false);
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
					<ItemCard
						item={item}
						onCancel={() => {
							setSelectItem(item);
							setModalCancel(true);
						}}
					/>
				)}
			/>
			<ModalCancel
				visible={modalCancel}
				close={() => setModalCancel(false)}
				item={selectItem}
				reasons={reasons}
			/>
		</View>
	);
}
