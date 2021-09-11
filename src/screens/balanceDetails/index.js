import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Colors, Pallete, Strings } from '../../lib/constants';
import TitleWithSubTitle from '../../components/TitleWithSubTitle';

import styles from './styles';

import balancetes from '../balance/data.json';
import { ValueFormat } from '../../lib/utils/formatCurrency';
import CardDetails from './components/CardDetails';

export default function BalanceDetailsScreen() {
	return (
		<ScrollView style={styles.scrollView}>
			<View style={Pallete.screen}>
				<View style={styles.row}>
					<TitleWithSubTitle
						title={Strings.balanceteDetalhe}
						subTitle={Strings.balanceteDetalheDescription}
					/>
					<MaterialIcons
						name="description"
						size={50}
						color={Colors.primary}
					/>
				</View>
				<View style={styles.row}>
					<View style={styles.col1}>
						<Text key="data" style={styles.h1}>
							{balancetes[0].data}
						</Text>

						<View style={styles.row_balance}>
							<Text style={Pallete.paragraph}>
								Saldo Anterior:
							</Text>
							<ValueFormat
								key="saldo_anterior"
								style={Pallete.paragraph}
								value={balancetes[0].saldo_anterior}
							/>
						</View>

						<View style={styles.row_balance}>
							<Text style={Pallete.paragraph}>Pagamentos:</Text>
							<ValueFormat
								key="pagamentos"
								style={Pallete.paragraph}
								value={balancetes[0].pagamentos}
							/>
						</View>

						<View style={styles.row_balance}>
							<Text style={Pallete.paragraph}>Recebimentos:</Text>
							<ValueFormat
								key="recebimentos"
								style={Pallete.paragraph}
								value={balancetes[0].rebimentos}
							/>
						</View>
						<View style={styles.label}>
							<Text style={Pallete.paragraph}>Saldo:</Text>

							<ValueFormat
								key="saldo"
								style={Pallete.paragraph}
								value={balancetes[0].saldo}
							/>
						</View>
					</View>

					<View style={styles.col2}>
						<TouchableOpacity>
							<MaterialIcons
								name="share"
								size={50}
								color={Colors.primary}
							/>
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.col}>
					{balancetes[0].detalhes.map((item) => (
						<CardDetails
							key={item?.id}
							id={item.id}
							data={item.data}
							despesasDiversas={item.despesas_diversas}
							honorariosSindico={item.honorarios_sindico}
							luzForca={item.luz_forca}
						/>
					))}
				</View>
			</View>
		</ScrollView>
	);
}
