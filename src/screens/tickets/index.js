import React from 'react';
import { View, ScrollView, FlatList, RefreshControl } from 'react-native';
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
		<ScrollView>
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
					<ItemEmphasis
						onPress={() => {
							RootNavigator.navigate('TicketDetails', {
								item: list[0],
							});
						}}
						item={list[0]}
					/>

					<FlatList
						refreshControl={<RefreshControl refreshing={loading} />}
						data={list}
						keyExtractor={(item) => item.id.toString()}
						renderItem={({ item, index }) =>
							index > 0 && (
								<Item
									item={item}
									onPress={() => {
										RootNavigator.navigate(
											'TicketDetails',
											{
												item,
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
	loading: PropTypes.bool.isRequired,
	list: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.number,
			dueDate: PropTypes.string,
			state: PropTypes.number,
			name: PropTypes.string,
		}),
	).isRequired,
};

const mapStateToProps = (state) => ({
	list: state.tickes.list,
});

const mapDispatchToProps = (dispatch) => ({
	onGet: () => dispatch(tickesActions.getList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketsScreen);
