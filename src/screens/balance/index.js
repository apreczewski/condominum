import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Colors, Pallete, Strings } from '../../lib/constants';
import TitleWithSubTitle from '../../components/TitleWithSubTitle';

import * as Navigation from '../../lib/utils/navigation';
import styles from './styles';

import balancetes from './data.json';

export default function BalanceScreen() {
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
						<Text style={Pallete.h3}>
							{`Saldo Anterior: R$ ${balancetes[0].saldo_anterior}`}
						</Text>
						<Text
							style={
								Pallete.h3
							}>{`Pagamentos: R$ ${balancetes[0].pagamentos}`}</Text>
						<Text style={Pallete.h3}>
							{`Recebimentos: R$ ${balancetes[0].rebimentos}`}
						</Text>
						<Text
							style={
								styles.h3
							}>{`Saldo: R$ ${balancetes[0].saldo}`}</Text>
					</View>
				</View>
				<View style={styles.row}>
					<View style={styles.col}>
						<Text style={styles.h2}>Ver detalhes </Text>
						{balancetes.map((item, index) => (
							<>
								{index > 0 && (
									<TouchableOpacity
										key={item.id}
										onPress={() =>
											Navigation.navigate(
												'BalanceDetails',
											)
										}>
										<View style={styles.col}>
											<Text style={styles.h2}>
												{item.data}
											</Text>
											<View style={styles.row}>
												<Text style={styles.h2}>
													{item.saldo}
												</Text>
												<MaterialIcons
													name="arrow-forward-ios"
													size={30}
													color={Colors.secondary}
												/>
											</View>
										</View>
									</TouchableOpacity>
								)}
							</>
						))}
					</View>
				</View>
			</View>
		</ScrollView>
	);
}
