import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Colors, Pallete, Strings } from '../../lib/constants';
import TitleWithSubTitle from '../../components/TitleWithSubTitle';

import * as Navigation from '../../lib/utils/navigation';
import styles from './styles';
import Card from './components/Card';

import balancetes from './data.json';
import { ValueFormat } from '../../components/FormatCurrency';

export default function BalanceScreen() {
	// const formatCurrency = new Intl.NumberFormat('pt-BR');

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
						<Text style={styles.h1}>{balancetes[0].data}</Text>

						<View style={styles.row_balance}>
							<Text style={Pallete.paragraph}>
								Saldo Anterior:
							</Text>
							<ValueFormat
								style={Pallete.paragraph}
								value={balancetes[0].saldo_anterior}
							/>
						</View>

						<View style={styles.row_balance}>
							<Text style={Pallete.paragraph}>Pagamentos:</Text>
							<ValueFormat
								style={Pallete.paragraph}
								value={balancetes[0].pagamentos}
							/>
						</View>

						<View style={styles.row_balance}>
							<Text style={Pallete.paragraph}>Recebimentos:</Text>
							<ValueFormat
								style={Pallete.paragraph}
								value={balancetes[0].rebimentos}
							/>
						</View>

						<View style={styles.label}>
							<Text style={Pallete.paragraph}>Saldo:</Text>

							<ValueFormat
								style={Pallete.paragraph}
								value={balancetes[0].saldo}
							/>
						</View>
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
