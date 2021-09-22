import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { View, ScrollView, FlatList, RefreshControl } from 'react-native';

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
		<ScrollView>
			<View style={Pallete.screen}>
				<TitleSubTitleWithIcon
					title={Strings.balancete}
					subTitle={Strings.balanceteDescription}>
					<MaterialIcons
						name="description"
						size={50}
						color={Colors.primary}
					/>
				</TitleSubTitleWithIcon>
				<View style={styles.body}>
					<ItemEmphasis
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
						refreshControl={<RefreshControl refreshing={loading} />}
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
												item,
											},
										);
									}}
								/>
							)
						}
					/>
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
			data: PropTypes.string,
			saldo_anterior: PropTypes.number,
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
