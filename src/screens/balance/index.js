import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	FlatList,
	RefreshControl,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Colors, Pallete, Strings } from '../../lib/constants';
import TitleWithSubTitle from '../../components/TitleWithSubTitle';

import * as RootNavigator from '../../lib/utils/navigation';
import styles from './styles';
import Item from './components/Item';
import { balanceActions } from '../../store/actions';
import { ValueFormat } from '../../lib/utils/formatCurrency';

function BalanceScreen({ list, onRead }) {
	return (
		<ScrollView>
			<View style={Pallete.screen}>
				<View style={styles.row}>
					<TitleWithSubTitle
						title={Strings.balancete}
						subTitle={Strings.balanceteDescription}
					/>
					<TouchableOpacity
						onPress={() =>
							RootNavigator.navigate('BalanceDetails')
						}>
						<MaterialIcons
							name="description"
							size={50}
							color={Colors.primary}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.row}>
					<View style={styles.col}>
						<Text style={styles.h1}>{list[0].data}</Text>

						<View style={styles.row_balance}>
							<Text style={Pallete.paragraph}>
								Saldo Anterior:
							</Text>
							<ValueFormat
								style={Pallete.paragraph}
								value={list[0].saldo_anterior}
							/>
						</View>

						<View style={styles.row_balance}>
							<Text style={Pallete.paragraph}>Pagamentos:</Text>
							<ValueFormat
								style={Pallete.paragraph}
								value={list[0].pagamentos}
							/>
						</View>

						<View style={styles.row_balance}>
							<Text style={Pallete.paragraph}>Recebimentos:</Text>
							<ValueFormat
								style={Pallete.paragraph}
								value={list[0].rebimentos}
							/>
						</View>

						<View style={styles.label}>
							<Text style={Pallete.paragraph}>Saldo:</Text>

							<ValueFormat
								style={Pallete.paragraph}
								value={list[0].saldo}
							/>
						</View>
					</View>
				</View>
				<FlatList
					refreshControl={<RefreshControl />}
					style={styles.container}
					data={list}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item, index }) =>
						index > 0 && (
							<Item
								item={item}
								onPress={() => {
									onRead(item);
									RootNavigator.navigate('BalanceDetails', {
										item,
									});
								}}
							/>
						)
					}
				/>
			</View>
		</ScrollView>
	);
}

BalanceScreen.propTypes = {
	onRead: PropTypes.func.isRequired,
	list: PropTypes.arrayOf(
		PropTypes.shape({
			data: PropTypes.string,
			saldo_anterior: PropTypes.number,
			pagamentos: PropTypes.number,
			rebimentos: PropTypes.number,
			saldo: PropTypes.number,
		}),
	).isRequired,
};

const mapStateToProps = (state) => ({
	list: state.balance.list,
});

const mapDispatchToProps = (dispatch) => ({
	onRead: (detailsbalance) =>
		dispatch(balanceActions.setDetailsBalance(detailsbalance)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BalanceScreen);
