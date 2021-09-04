import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Colors, Pallete, Strings } from '../../lib/constants';
import TitleWithSubTitle from '../../components/TitleWithSubTitle';

import * as Navigation from '../../lib/utils/navigation';
import styles from './styles';

export default function BalanceScreen() {
	const balancetes = [
		{ id: 1, data: '05/2021', saldo: 'R$ 17.419,85' },
		{ id: 2, data: '05/2021', saldo: 'R$ 17.419,85' },
		{ id: 3, data: '05/2021', saldo: 'R$ 17.419,85' },
		{ id: 4, data: '05/2021', saldo: 'R$ 17.419,85' },
		{ id: 5, data: '05/2021', saldo: 'R$ 17.419,85' },
		{ id: 6, data: '05/2021', saldo: 'R$ 17.419,85' },
		{ id: 7, data: '05/2021', saldo: 'R$ 17.419,85' },
		{ id: 8, data: '05/2021', saldo: 'R$ 17.419,85' },
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
						<Text style={Pallete.h3}>
							Saldo Anterior: R$ 15.060,00
						</Text>
						<Text style={Pallete.h3}>Pagamentos: R$ 15.000,00</Text>
						<Text style={Pallete.h3}>
							Recebimentos: R$ 17.035,49
						</Text>
						<Text style={styles.h3}>Saldo: R$ 17.419,85</Text>
					</View>
				</View>
				<View style={styles.row}>
					<View style={styles.col}>
						<Text style={styles.h2}>Ver detalhes </Text>
						{balancetes.map((item) => (
							<View key={item.id} style={styles.col}>
								<Text style={styles.h2}>{item.data}</Text>
								<View style={styles.row}>
									<Text style={styles.h2}>{item.saldo}</Text>
									<MaterialIcons
										name="arrow-forward-ios"
										size={30}
										color={Colors.secondary}
									/>
								</View>
							</View>
						))}
					</View>
				</View>
			</View>
		</ScrollView>
	);
}
