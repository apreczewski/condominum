import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { FontAwesome, EvilIcons, Feather } from '@expo/vector-icons';
import { Colors, Pallete, Strings } from '../../lib/constants';
import TitleWithSubTitle from '../../components/TitleWithSubTitle';
import { ValueFormat } from '../../lib/utils/formatCurrency';
import ticket from '../ticket/data.json';
import * as RootNavigator from '../../lib/utils/navigation';

import styles from './styles';
import Item from './components/Item';

export default function TicketDetailsScreen() {
	return (
		<ScrollView>
			<View style={Pallete.screen}>
				<View style={styles.row}>
					<TitleWithSubTitle
						title={Strings.ticketDetails}
						subTitle={Strings.ticketDetailsDescription}
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
				</View>

				<View style={styles.lineOfSquares}>
					<TouchableOpacity
						onPress={() => RootNavigator.navigate('')}>
						<View style={styles.square}>
							<FontAwesome
								name="barcode"
								size={40}
								color={Colors.primary}
							/>
							<Text style={styles.textSquare}>Copiar</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => RootNavigator.navigate('')}>
						<View style={styles.square}>
							<EvilIcons
								name="share-google"
								size={50}
								color={Colors.primary}
							/>
							<Text style={styles.textSquare}>Compartilhar</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => RootNavigator.navigate('')}>
						<View style={styles.square}>
							<Feather
								name="download"
								size={40}
								color={Colors.primary}
							/>
							<Text style={styles.textSquare}>Baixar</Text>
						</View>
					</TouchableOpacity>
				</View>
				<Item />
			</View>
		</ScrollView>
	);
}
