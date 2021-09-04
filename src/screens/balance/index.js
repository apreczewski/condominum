import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Colors, Pallete, Strings } from '../../lib/constants';
import TitleWithSubTitle from '../../components/TitleWithSubTitle';

import * as Navigation from '../../lib/utils/navigation';
import styles from './styles';
import Card from './components/Card';

export default function BalanceScreen() {
	const balancetes = [
		{ id: 1, data: '05/2021', saldo: 'Saldo: R$ 17.419,85' },
		{ id: 2, data: '05/2021', saldo: 'Saldo: R$ 17.419,85' },
		{ id: 3, data: '05/2021', saldo: 'Saldo: R$ 17.419,85' },
		{ id: 4, data: '05/2021', saldo: 'Saldo: R$ 17.419,85' },
		{ id: 5, data: '05/2021', saldo: 'Saldo: R$ 17.419,85' },
		{ id: 6, data: '05/2021', saldo: 'Saldo: R$ 17.419,85' },
		{ id: 7, data: '05/2021', saldo: 'Saldo: R$ 17.419,85' },
		{ id: 8, data: '05/2021', saldo: 'Saldo: R$ 17.419,85' },
	];

	return (
		<ScrollView style={styles.scrollView}>
			<View style={Pallete.screen}>
				<View style={styles.row}>
					<TitleWithSubTitle
						title={Strings.balancete}
						subTitle={Strings.balanceteDescription}
					/>
					<TouchableOpacity
						onPress={() => Navigation.navigate('BalanceDetails')}>
						<MaterialIcons
							name="description"
							size={50}
							color={Colors.primary}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.row}>
					<View style={styles.col}>
						<Text style={styles.h1}>06/2021</Text>
						<Text style={Pallete.paragraph}>
							Saldo Anterior: R$ 15.060,00
						</Text>
						<Text style={Pallete.paragraph}>
							Pagamentos: R$ 15.000,00
						</Text>
						<Text style={Pallete.paragraph}>
							Recebimentos: R$ 17.035,49
						</Text>
						<Text style={styles.h3}>Saldo: R$ 17.419,85</Text>
					</View>
				</View>
				<View style={styles.row}>
					<View style={styles.col}>
						<Text style={styles.h2}>
							{Strings.balanceteDetails}
						</Text>

						{balancetes &&
							balancetes.map((item) => (
								<Card
									key={item.id}
									id={item.id}
									data={item?.data}
									saldo={item?.saldo}
								/>
							))}
					</View>
				</View>
			</View>
		</ScrollView>
	);
}
