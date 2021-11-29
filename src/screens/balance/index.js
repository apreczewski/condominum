import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons';
import { View, ScrollView, FlatList, RefreshControl, Text } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import * as RootNavigator from '../../lib/utils/navigation';
import { Colors, Pallete, Strings } from '../../lib/constants';
import { ItemEmphasis } from './components/ItemEmphasis';
import { TitleSubTitleWithIcon } from '../../components/TitleSubTitleWithIcon';

import Item from './components/Item';
import styles from './styles';
import { balancesActions } from '../../store/actions';

function BalanceScreen({ onGet, loading, list }) {
	useFocusEffect(
		React.useCallback(() => {
			onGet();
		}, []),
	);

	return (
		<ScrollView
			vertical
			refreshControl={<RefreshControl refreshing={loading} />}>
			<View style={Pallete.screen}>
				<TitleSubTitleWithIcon
					title={Strings.balancete}
					subTitle={Strings.balanceteDescription}>
					<FontAwesome5
						name="table"
						size={42}
						color={Colors.primary}
					/>
				</TitleSubTitleWithIcon>
				<View style={styles.body}>
					{list.length ? (
						<ItemEmphasis
							onPress={() => {
								RootNavigator.navigate('BalanceDetails', {
									item: list[0],
									id: list[0]?.id,
								});
							}}
							item={list[0]}
							iconName="arrow-forward-ios"
							iconColor={Colors.secondary}
							iconSize={30}
						/>
					) : (
						<Text>Você não possui balancetes!</Text>
					)}

					{list && (
						<FlatList
							data={list}
							keyExtractor={(item) => item?.id.toString()}
							renderItem={({ item, index }) =>
								index > 0 && (
									<Item
										item={item}
										onPress={() => {
											RootNavigator.navigate(
												'BalanceDetails',
												{
													id: item?.id,
												},
											);
										}}
									/>
								)
							}
						/>
					)}
				</View>
			</View>
		</ScrollView>
	);
}

BalanceScreen.propTypes = {
	onGet: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	list: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			data: PropTypes.number,
			saldo_anterior: PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.number,
			]),
			pagamentos: PropTypes.number,
			rebimentos: PropTypes.number,
			saldo: PropTypes.number,
		}),
	).isRequired,
};

const mapStateToProps = (state) => ({
	loading: state.api.loading,
	list: state.balances.list,
});

const mapDispatchToProps = (dispatch) => ({
	onGet: () => dispatch(balancesActions.getList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BalanceScreen);
