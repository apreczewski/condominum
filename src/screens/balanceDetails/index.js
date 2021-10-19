import React from 'react';
import { View, ScrollView } from 'react-native';
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

function BalanceDetailsScreen({ onGet, /* loading, */ item }) {
	useFocusEffect(
		React.useCallback(() => {
			onGet();
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
		<ScrollView vertical>
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
						item.detalhes.map((i) => (
							<DetailsItem
								key={i?.id}
								id={i.id}
								data={i.data}
								despesasDiversas={i.despesas_diversas}
								honorariosSindico={i.honorarios_sindico}
								luzForca={i.luz_forca}
							/>
						))}
				</View>
			</View>
		</ScrollView>
	);
}

BalanceDetailsScreen.propTypes = {
	onGet: PropTypes.func.isRequired,
	// loading: PropTypes.bool.isRequired,
	item: PropTypes.shape({
		data: PropTypes.string,
		saldo_anterior: PropTypes.number,
		pagamentos: PropTypes.number,
		rebimentos: PropTypes.number,
		saldo: PropTypes.number,
		detalhes: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number,
				data: PropTypes.string,
				despesas_diversas: PropTypes.number,
				honorarios_sindico: PropTypes.number,
				luz_forca: PropTypes.number,
			}),
		),
	}).isRequired,
};

const mapStateToProps = (state) => ({
	loading: state.api.loading,
	list: state.balances.list,
});

const mapDispatchToProps = (dispatch) => ({
	onGet: (id) => dispatch(balancesActions.getList(id)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(BalanceDetailsScreen);
