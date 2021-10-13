import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import { Pallete, Strings } from '../../lib/constants';

import SearchInput from '../../components/SearchInput';
import ModalConfirmDelete from '../../components/ModalConfirmAction';
import ItemCard from './components/ItemCard';
import ModalConfirmReserve from './components/ModalConfirmReserve';
import ModalFinish from './components/ModalFinish';

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

export default function ReservesManagementScreen() {
	const [selectItem, setSelectItem] = useState({});
	const [modalConfirm, setModalConfirm] = useState(false);
	const [modalDelete, setModalDelete] = useState(false);
	const [modalFinish, setModalFinish] = useState(false);

	return (
		<View style={Pallete.screen}>
			<View style={styles.marginBottom}>
				<Text style={Pallete.h1}>{Strings.reservesManagement}</Text>
			</View>
			<SearchInput />
			<FlatList
				data={data}
				style={styles.list}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<ItemCard
						item={item}
						onConfirm={() => {
							setSelectItem(item);
							setModalConfirm(true);
						}}
						onDelete={() => {
							setSelectItem(item);
							setModalDelete(true);
						}}
						onFinish={() => {
							setSelectItem(item);
							setModalFinish(true);
						}}
					/>
				)}
			/>
			<ModalConfirmDelete
				submit={() => {}}
				close={() => setModalDelete(false)}
				visible={modalDelete}
				description={Strings.confirmDeleteReserve}
			/>
			<ModalConfirmReserve
				submit={() => {}}
				close={() => setModalConfirm(false)}
				visible={modalConfirm}
				item={selectItem}
			/>
			<ModalFinish
				submit={() => {}}
				close={() => setModalFinish(false)}
				visible={modalFinish}
				item={selectItem}
			/>
		</View>
	);
}
