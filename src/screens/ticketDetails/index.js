import React, { useCallback } from 'react';
import {
	View,
	ScrollView,
	Text,
	TouchableOpacity,
	RefreshControl,
	FlatList,
} from 'react-native';
// import Clipboard from '@react-native-community/clipboard';
import Toast from 'react-native-root-toast';

import * as Clipboard from 'expo-clipboard';
import * as WebBrowser from 'expo-web-browser';
import { FontAwesome, /* EvilIcons */ Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import { useFocusEffect } from '@react-navigation/native';
import { connect } from 'react-redux';

import { Colors, Pallete, Strings } from '../../lib/constants';
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

	const handleCode = (code) => {
		if (code.acao_copia === 'sim') {
			Clipboard.setString(code.codigo_barras);
			Toast.show(
				`Codigo de barras ser?? copiado para ??rea de transfer??ncia. C??digo de barras: ${code.codigo_barras}`,
				{
					duration: 10000,
					position: Toast.positions.BOTTOM,
					animation: true,
					hideOnPress: true,
					backgroundColor: Colors.background,
					textColor: Colors.secondary,
					visible: true,
				},
			);
		} else {
			Toast.show('Boleto n??o dispon??vel', {
				duration: 3000,
				position: Toast.positions.BOTTOM,
				animation: true,
				hideOnPress: true,
				backgroundColor: Colors.background,
				textColor: Colors.secondary,
				visible: true,
			});
		}
	};

	const openWebBrowser = useCallback(async (url, reemite) => {
		if (reemite === 'sim') {
			WebBrowser.openBrowserAsync(`https://${url}`);
		} else {
			Toast.show('Boleto n??o dispon??vel', {
				duration: 3000,
				position: Toast.positions.BOTTOM,
				animation: true,
				hideOnPress: true,
				backgroundColor: Colors.background,
				textColor: Colors.secondary,
				visible: true,
			});
		}

		// this.props.onPress && this.props.onPress();
	}, []);

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
					<TouchableOpacity onPress={() => handleCode(item)}>
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

					{/* <TouchableOpacity onPress={openShareAsync}>
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
					</TouchableOpacity> */}

					<TouchableOpacity
						onPress={() =>
							openWebBrowser(
								`${item?.url_boleto}`,
								item.acao_reemite,
							)
						}>
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

					{item?.despesa &&
						item?.despesa.map((despesa) => (
							<>
								<Text style={styles.titleEspenses}>
									{despesa?.name}
								</Text>
								<ScrollView>
									<FlatList
										data={despesa?.expenditure}
										keyExtractor={(i, index) =>
											index.toString()
										}
										renderItem={({
											item: { descricao, valor },
										}) => (
											<View style={styles.row_ticket}>
												<Text style={styles.h3}>
													{descricao}
												</Text>
												<ValueFormat
													style={styles.value}
													value={parseFloat(valor)}
												/>
											</View>
										)}
									/>
								</ScrollView>
								<View style={styles.row_ticket}>
									<Text style={styles.total}>SUBTOTAL</Text>
									<ValueFormat
										style={styles.total}
										value={despesa.subtotal}
									/>
								</View>
							</>
						))}
					<View style={styles.row_ticket}>
						<Text style={styles.total}>TOTAL</Text>
						<ValueFormat
							style={styles.total}
							value={parseFloat(itemCurrent?.valor)}
						/>
					</View>
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
				valor: PropTypes.oneOfType([
					PropTypes.string,
					PropTypes.number,
				]),
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
		acao_reemite: PropTypes.string,
		codigo_barras: PropTypes.string,
		despesa: PropTypes.arrayOf(
			PropTypes.shape({
				expenditure: PropTypes.arrayOf(
					PropTypes.shape({
						descricao: PropTypes.string,
						valor: PropTypes.oneOfType([
							PropTypes.string,
							PropTypes.number,
						]),
					}),
				),
				id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
				name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
				subtotal: PropTypes.oneOfType([
					PropTypes.string,
					PropTypes.number,
				]),
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
