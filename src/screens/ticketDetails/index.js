/* eslint-disable no-shadow */
import React from 'react';
import {
	View,
	ScrollView,
	Text,
	TouchableOpacity,
	RefreshControl,
	FlatList,
} from 'react-native';
import { FontAwesome, EvilIcons, Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import { useFocusEffect } from '@react-navigation/native';
import { connect } from 'react-redux';

import { Colors, Pallete, Strings } from '../../lib/constants';
import * as RootNavigator from '../../lib/utils/navigation';
import styles from './styles';
import { TitleSubTitleWithIcon } from '../../components/TitleSubTitleWithIcon';
import { ValueFormat } from '../../lib/utils/formatCurrency';
import { ItemEmphasis } from './components/ItemEmphasis';
import { tickesActions } from '../../store/actions';

function TicketDetailsScreen({ onGetItem, route, loading, item }) {
	const { itemCurrent } = route.params;

	useFocusEffect(
		React.useCallback(() => {
			onGetItem(itemCurrent?.id);
		}, []),
	);

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
		<ScrollView
			vertical
			refreshControl={<RefreshControl refreshing={loading} />}>
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

				<ItemEmphasis onPress={openShareAsync} item={itemCurrent} />

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
					<ScrollView>
						<FlatList
							data={item?.desepesa}
							keyExtractor={(item, index) => index.toString()}
							renderItem={({ item: desepesa }) => (
								<View style={styles.row_ticket}>
									<Text style={styles.h3}>
										{desepesa?.descricao}
									</Text>
									<ValueFormat
										style={styles.value}
										value={desepesa?.valor}
									/>
								</View>
							)}
						/>
					</ScrollView>
				</View>
			</View>
		</ScrollView>
	);
}

TicketDetailsScreen.propTypes = {
	route: PropTypes.shape({
		params: PropTypes.shape({
			itemCurrent: PropTypes.shape({
				id: PropTypes.number,
				valor: PropTypes.string,
				vencimento: PropTypes.string,
				situacao: PropTypes.string,
			}),
		}),
	}).isRequired,

	loading: PropTypes.bool.isRequired,
	onGetItem: PropTypes.func.isRequired,

	item: PropTypes.shape({
		pdf_url: PropTypes.string,
		url_boleto: PropTypes.string,
		codigo_barras: PropTypes.string,
		desepesa: PropTypes.arrayOf(
			PropTypes.shape({
				descricao: PropTypes.string,
				valor: PropTypes.string,
			}),
		),
	}).isRequired,
};

const mapStateToProps = (state) => ({
	loading: state.api.loading,
	item: state.tickes.item,
});

const mapDispatchToProps = (dispatch) => ({
	onGetItem: (id) => dispatch(tickesActions.getItem(id)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(TicketDetailsScreen);
