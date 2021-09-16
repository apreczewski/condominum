import React from 'react';
import { View, ScrollView, FlatList, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Colors, Pallete, Strings } from '../../lib/constants';

import * as RootNavigator from '../../lib/utils/navigation';
import Item from './components/Item';
import { balanceActions } from '../../store/actions';
import FeaturedItem from '../../components/FeaturedItem';
import TitleSubTitleWithIcon from '../../components/TitleSubTitleWithIcon';

function BalanceScreen({ list, onRead }) {
	return (
		<ScrollView>
			<View style={Pallete.screen}>
				<TitleSubTitleWithIcon
					title={Strings.balancete}
					subTitle={Strings.balanceteDescription}
					iconName="description"
				/>

				<FeaturedItem
					onPress={() => {
						RootNavigator.navigate('BalanceDetails', {
							item: list[0],
						});
					}}
					item={list[0]}
					iconName="arrow-forward-ios"
					iconColor={Colors.secondary}
					iconSize={30}
				/>

				<FlatList
					refreshControl={<RefreshControl />}
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
