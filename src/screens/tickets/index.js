import React from 'react';
import { View, ScrollView, FlatList, RefreshControl, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

import { Colors, Pallete, Strings } from '../../lib/constants';
import { TitleSubTitleWithIcon } from '../../components/TitleSubTitleWithIcon';
import * as RootNavigator from '../../lib/utils/navigation';
import { Item } from './components/Item';
import { ItemEmphasis } from './components/ItemEmphasis';
import { tickesActions } from '../../store/actions';
import styles from './styles';

function TicketsScreen({ onGet, loading, list }) {
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
					title={Strings.tickets}
					subTitle={Strings.ticketsDescription}>
					<FontAwesome
						name="barcode"
						size={45}
						color={Colors.primary}
					/>
				</TitleSubTitleWithIcon>

				<View style={styles.list}>
					{list.length ? (
						<ItemEmphasis
							item={list[0]}
							onPress={() => {
								RootNavigator.navigate('TicketDetails', {
									itemCurrent: list[0],
									loading,
								});
							}}
						/>
					) : (
						<Text style={styles.row}>Você não possui boletos!</Text>
					)}

					<FlatList
						refreshControl={<RefreshControl refreshing={loading} />}
						data={list}
						keyExtractor={(item) => item.id.toString()}
						renderItem={({ item, index }) =>
							index > 0 && (
								<Item
									item={item}
									isLast={index === list.length - 1}
									onPress={() => {
										RootNavigator.navigate(
											'TicketDetails',
											{
												itemCurrent: item,
												loading,
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

TicketsScreen.propTypes = {
	onGet: PropTypes.func.isRequired,
	loading: PropTypes.bool,
	list: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			valor: PropTypes.string,
			vencimento: PropTypes.string,
			situacao: PropTypes.string,
		}),
	).isRequired,
};

TicketsScreen.defaultProps = {
	loading: false,
};

const mapStateToProps = (state) => ({
	loading: state.api.loading,
	list: state.tickes.list,
});

const mapDispatchToProps = (dispatch) => ({
	onGet: () => dispatch(tickesActions.getList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketsScreen);
