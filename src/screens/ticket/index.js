import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { FontAwesome, EvilIcons } from '@expo/vector-icons';
import { Colors, Pallete, Strings } from '../../lib/constants';
import TitleWithSubTitle from '../../components/TitleWithSubTitle';

import styles from './styles';
import ticket from './data.json';
import { ValueFormat } from '../../lib/utils/formatCurrency';
import Item from './components/Item';

export default function TicketScreen() {
	return (
		<ScrollView>
			<View style={Pallete.screen}>
				<View style={styles.row}>
					<TitleWithSubTitle
						title={Strings.tickets}
						subTitle={Strings.ticketsDescription}
					/>

					<FontAwesome
						name="barcode"
						size={50}
						color={Colors.secondary}
					/>
				</View>

				<View style={styles.col}>
					<ValueFormat style={styles.h1} value={ticket[0].value} />

					<View style={styles.row_ticket}>
						<Text style={styles.h3}>Vencimento:</Text>
						<Text style={Pallete.h3}>{ticket[0].dueDate}</Text>
					</View>

					<View style={styles.label}>
						<EvilIcons
							name="clock"
							size={30}
							color={Colors.secondary}
						/>
						<Text style={Pallete.paragraph}>{ticket[0].name}</Text>
					</View>

					<Text style={styles.details}>Ver detalhes</Text>
				</View>

				{ticket &&
					ticket.map(
						(item, index) =>
							index > 0 && (
								<Item
									state={item.state}
									key={item.id}
									value={item.value}
									dueDate={item.dueDate}
									name={item.name}
								/>
							),
					)}
			</View>
		</ScrollView>
	);
}
