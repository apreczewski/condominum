import React, { useState } from 'react';
import { View } from 'react-native';
import { Pallete } from '../../lib/constants';
import Item from './components/Item';

export default function CondominiumScreen() {
	const condominium = [
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
	const [selectCondominium, setSelectCondominium] = useState(false);

	/* const handleSelectCondominium = (data) => {
		setSelectCondominium(data);
	}; */

	return (
		<View style={Pallete.screen}>
			<Item
				current={selectCondominium}
				condominium={condominium}
				select={selectCondominium}
				onSelect={setSelectCondominium}
			/>
		</View>
	);
}
