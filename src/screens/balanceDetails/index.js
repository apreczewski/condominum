import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Colors, Pallete, Strings } from '../../lib/constants';
import TitleWithSubTitle from '../../components/TitleWithSubTitle';

import styles from './styles';

import balancetes from '../balance/data.json';
import { ValueFormat } from '../../components/FormatCurrency';

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
					{balancetes[0].detalhes.map((item, index) => (
						<>
							{index > 0 && (
								<View style={styles.card}>
									<View style={styles.colLeft}>
										<Text style={styles.cardTitle}>
											{`Dia ${item.data}`}
										</Text>
										<Text style={Pallete.paragraph}>
											{Strings.despesasDiversas}
										</Text>
										<Text style={Pallete.paragraph}>
											{Strings.honorariosSindico}
										</Text>
										<Text style={Pallete.paragraph}>
											{Strings.luzForca}
										</Text>
									</View>
									<View style={styles.colRight}>
										<ValueFormat
											style={{
												...Pallete.h3,
												color:
													item.despesas_diversas >= 0
														? Colors.secondary
														: Colors.primary,
											}}
											value={item.despesas_diversas}
										/>

										<ValueFormat
											style={Pallete.h3}
											value={item.honorarios_sindico}
										/>
										<ValueFormat
											style={Pallete.h3}
											value={item.luz_forca}
										/>
									</View>
								</View>
							)}
						</>
					))}
				</View>
			</View>
		</ScrollView>
	);
}
