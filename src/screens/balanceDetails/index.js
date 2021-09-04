import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Colors, Pallete, Strings } from '../../lib/constants';
import TitleWithSubTitle from '../../components/TitleWithSubTitle';

import * as Navigation from '../../lib/utils/navigation';
import styles from './styles';

import balancetes from '../balance/data.json';

export default function BalanceDetailsScreen() {
	return (
		<ScrollView style={styles.scrollView}>
			<View style={Pallete.screen}>
				<View style={styles.row}>
					<TitleWithSubTitle
						title={Strings.balanceteDetalhe}
						subTitle={Strings.balanceteDetalheDescription}
					/>
					<TouchableOpacity>
						<MaterialIcons
							name="description"
							size={50}
							color={Colors.primary}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.row}>
					<View style={styles.col1}>
						<Text style={styles.h1}>{balancetes[0].data}</Text>
						<Text style={Pallete.h3}>
							{`Saldo Anterior ${balancetes[0].saldo_anterior}`}
						</Text>
						<Text
							style={
								Pallete.h3
							}>{`Pagamentos ${balancetes[0].pagamentos}`}</Text>
						<Text style={Pallete.h3}>
							{`Recebimentos ${balancetes[0].rebimentos}`}
						</Text>
						<Text
							style={
								styles.h3
							}>{`Saldo ${balancetes[0].saldo}`}</Text>
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
								<TouchableOpacity
									key={item.id}
									onPress={() =>
										Navigation.navigate('BalanceDetails')
									}>
									<View style={styles.card}>
										<View style={styles.colLeft}>
											<Text style={styles.cardTitle}>
												{`Dia ${item.data}`}
											</Text>
											<Text style={Pallete.h3}>
												{Strings.despesasDiversas}
											</Text>
											<Text style={Pallete.h3}>
												{Strings.honorariosSindico}
											</Text>
											<Text style={Pallete.h3}>
												{Strings.luzForca}
											</Text>
										</View>
										<View style={styles.colRight}>
											<Text style={Pallete.h3}>
												{item.despesas_diversas}
											</Text>
											<Text style={Pallete.h3}>
												{item.honorarios_sindico}
											</Text>
											<Text style={Pallete.h3}>
												{item.luz_forca}
											</Text>
										</View>
									</View>
								</TouchableOpacity>
							)}
						</>
					))}
				</View>
			</View>
		</ScrollView>
	);
}
