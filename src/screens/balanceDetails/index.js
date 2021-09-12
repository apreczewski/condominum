import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Colors, Pallete, Strings } from '../../lib/constants';
import TitleWithSubTitle from '../../components/TitleWithSubTitle';
import styles from './styles';

import { ValueFormat } from '../../lib/utils/formatCurrency';
import DetailsItem from './components/DetailsItem';

function BalanceDetailsScreen({ route }) {
	const { item } = route.params;

	return (
		<ScrollView style={styles.scrollView}>
			<View style={Pallete.screen}>
				<View style={styles.row}>
					<TitleWithSubTitle
						title={Strings.balanceteDetalhe}
						subTitle={Strings.balanceteDetalheDescription}
					/>
					<MaterialIcons
						name="description"
						size={50}
						color={Colors.primary}
					/>
				</View>
				<View style={styles.row}>
					<View style={styles.col1}>
						<Text key="data" style={styles.h1}>
							{item.data}
						</Text>

						<View style={styles.row_balance}>
							<Text style={Pallete.paragraph}>
								Saldo Anterior:
							</Text>
							<ValueFormat
								key="saldo_anterior"
								style={Pallete.paragraph}
								value={item.saldo_anterior}
							/>
						</View>

						<View style={styles.row_balance}>
							<Text style={Pallete.paragraph}>Pagamentos:</Text>
							<ValueFormat
								key="pagamentos"
								style={Pallete.paragraph}
								value={item.pagamentos}
							/>
						</View>

						<View style={styles.row_balance}>
							<Text style={Pallete.paragraph}>Recebimentos:</Text>
							<ValueFormat
								key="recebimentos"
								style={Pallete.paragraph}
								value={item.rebimentos}
							/>
						</View>
						<View style={styles.label}>
							<Text style={Pallete.paragraph}>Saldo:</Text>

							<ValueFormat
								key="saldo"
								style={Pallete.paragraph}
								value={item.saldo}
							/>
						</View>
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
	route: PropTypes.shape({
		params: PropTypes.shape({
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
			}),
		}),
	}).isRequired,
};

const mapStateToProps = (state) => ({
	balanceActions: state.balance.balanceActions,
});

export default connect(mapStateToProps)(BalanceDetailsScreen);
