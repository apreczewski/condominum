import React from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import { MaterialIcons } from '@expo/vector-icons';

import { useFocusEffect } from '@react-navigation/native';
import { connect } from 'react-redux';
import { Colors, Pallete, Strings } from '../../lib/constants';
import { TitleSubTitleWithIcon } from '../../components/TitleSubTitleWithIcon';
import { ItemEmphasis } from './components/ItemEmphasis';

import styles from './styles';
import DetailsItem from './components/DetailsItem';
import { balancesActions } from '../../store/actions';

function BalanceDetailsScreen({ onGetItem, route, loading, item }) {
	const { id } = route.params;

	useFocusEffect(
		React.useCallback(() => {
			onGetItem(id);
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
					title={Strings.balanceteDetalhe}
					subTitle={Strings.balanceteDetalheDescription}>
					<MaterialIcons
						name="description"
						size={50}
						color={Colors.primary}
					/>
				</TitleSubTitleWithIcon>

				<ItemEmphasis
					onPress={openShareAsync}
					item={item}
					iconName="share"
					iconSize={40}
					iconColor={Colors.primary}
				/>

				<View style={styles.col}>
					{item &&
						item.movto_contabil?.map((itemDetails) => (
							<DetailsItem
								key={itemDetails?.id}
								itemDetails={itemDetails}
							/>
						))}
				</View>
			</View>
		</ScrollView>
	);
}

BalanceDetailsScreen.propTypes = {
	route: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.number,
		}),
	}).isRequired,
	onGetItem: PropTypes.func.isRequired,

	loading: PropTypes.bool.isRequired,
	item: PropTypes.shape({
		ano: PropTypes.string,
		mes: PropTypes.string,
		saldo_anterior: PropTypes.number,
		total_pagamento: PropTypes.number,
		total_recebimento: PropTypes.number,
		saldo_atual: PropTypes.number,
		movto_contabil: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number,
				data: PropTypes.string,
				valor: PropTypes.number,
				// honorarios_sindico: PropTypes.number,
				// luz_forca: PropTypes.number,
			}),
		),
	}).isRequired,
};

const mapStateToProps = (state) => ({
	loading: state.api.loading,
	item: state.balances.item,
});

const mapDispatchToProps = (dispatch) => ({
	onGetItem: (id) => dispatch(balancesActions.getItem(id)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(BalanceDetailsScreen);
