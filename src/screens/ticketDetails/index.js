import React from 'react';
import {
	View,
	ScrollView,
	Text,
	TouchableOpacity,
	FlatList,
	RefreshControl,
} from 'react-native';
import { FontAwesome, EvilIcons, Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import { Colors, Pallete, Strings } from '../../lib/constants';

import * as RootNavigator from '../../lib/utils/navigation';

import styles from './styles';
import { TitleSubTitleWithIcon } from '../../components/TitleSubTitleWithIcon';
import { ValueFormat } from '../../lib/utils/formatCurrency';
import { ItemEmphasis } from './components/ItemEmphasis';

function TicketDetailsScreen({ route }) {
	const { item, loading } = route.params;

	const fileUri = `${FileSystem.cacheDirectory}test.pdf`;

	const openShareAsync = () => {
		Sharing.isAvailableAsync()
			.then(() => {
				FileSystem.writeAsStringAsync(fileUri)
					.then(() => {
						// console.log('File', data);
						// setState('Wrote vcard file');
					})
					.catch(() => {
						// setState('Error writing vcard file');
						// console.log(JSON.stringify(err));
					});

				Sharing.shareAsync(fileUri)
					.then(() => {
						// console.log('Sharing', data);
						// setState('Shared');
					})
					.catch(() => {
						// setState('Error sharing vcard');
						// console.log(JSON.stringify(err));
					});
			})
			.catch(() => {
				// alert(`Uh oh, sharing isn't available on your platform`);
				// console.log(JSON.stringify(err));
			});
	};

	return (
		<ScrollView vertical>
			<View style={Pallete.screen}>
				<TitleSubTitleWithIcon
					title={Strings.ticketDetails}
					subTitle={Strings.ticketDetailsDescription}>
					<FontAwesome
						name="barcode"
						size={45}
						color={Colors.primary}
					/>
				</TitleSubTitleWithIcon>

				<ItemEmphasis item={item} />

				<View style={styles.row}>
					<TouchableOpacity
						onPress={() => RootNavigator.navigate('')}>
						<View style={styles.square}>
							<FontAwesome
								name="barcode"
								size={40}
								color={Colors.primary}
							/>
							<Text style={styles.textSquare}>
								{Strings.copy}
							</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity onPress={openShareAsync}>
						<View style={styles.square}>
							<EvilIcons
								name="share-google"
								size={50}
								color={Colors.primary}
							/>
							<Text style={styles.textSquare}>
								{Strings.toShare}
							</Text>
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
							<Text style={styles.textSquare}>
								{Strings.download}
							</Text>
						</View>
					</TouchableOpacity>
				</View>

				<View style={styles.container}>
					<Text style={styles.expenses}>{Strings.valuesDetails}</Text>
					<FlatList
						refreshControl={<RefreshControl refreshing={loading} />}
						data={item?.expenses}
						renderItem={({ item: expense }) => (
							<View style={styles.row_ticket}>
								<Text style={styles.h3}>{expense?.text}</Text>
								<ValueFormat
									style={styles.value}
									value={expense?.value}
								/>
							</View>
						)}
					/>
				</View>
			</View>
		</ScrollView>
	);
}

TicketDetailsScreen.propTypes = {
	route: PropTypes.shape({
		params: PropTypes.shape({
			item: PropTypes.shape({
				id: PropTypes.number,
				value: PropTypes.number,
				dueDate: PropTypes.string,
				name: PropTypes.string,
				state: PropTypes.number,
				expenses: PropTypes.arrayOf(
					PropTypes.shape({
						text: PropTypes.string,
						value: PropTypes.number,
					}),
				),
			}),
			loading: PropTypes.bool,
		}),
	}).isRequired,
};

export default TicketDetailsScreen;
