import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Colors, Pallete, Strings } from '../../lib/constants';
import TitleWithSubTitle from '../../components/TitleWithSubTitle';

import * as Navigation from '../../lib/utils/navigation';
import styles from './styles';
import Card from './components/Card';

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
