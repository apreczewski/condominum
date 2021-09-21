import React from 'react';
import { View, ScrollView, FlatList, RefreshControl } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Colors, Pallete, Strings } from '../../lib/constants';
import TitleSubTitleWithIcon from '../../components/TitleWithSubTitle';

import * as RootNavigator from '../../lib/utils/navigation';
import ticket from './data.json';
import Item from './components/Item';
import TicketFeaturedItem from '../../components/TicketFeaturedItem';
import styles from './styles';

function TicketsScreen({ onRead }) {
	return (
		<ScrollView>
			<View style={Pallete.screen}>
				<View style={styles.row}>
					<TitleSubTitleWithIcon
						title={Strings.tickets}
						subTitle={Strings.ticketsDescription}
					/>

					<FontAwesome
						name="barcode"
						size={50}
						color={Colors.secondary}
					/>
				</View>

				<TicketFeaturedItem
					onPress={() => {
						RootNavigator.navigate('TicketDetails', {
							item: ticket[0],
						});
					}}
					item={ticket[0]}
					iconName="arrow-forward-ios"
					iconColor={Colors.secondary}
					iconSize={30}
				/>

				<FlatList
					refreshControl={<RefreshControl />}
					data={ticket}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item, index }) =>
						index > 0 && (
							<Item
								item={item}
								onPress={() => {
									onRead(item);
									RootNavigator.navigate('TicketDetails', {
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

TicketsScreen.propTypes = {
	onRead: PropTypes.func.isRequired,
	/*	list: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.number,
			dueDate: PropTypes.string,
			state: PropTypes.string,
			name: PropTypes.string,
		}),
	).isRequired, */
};

const mapStateToProps = (state) => ({
	list: state.balance.list,
});

/* const mapDispatchToProps = (dispatch) => ({
	onRead: (detailsbalance) =>
		dispatch(balanceActions.setDetailsBalance(detailsbalance)),
}); */

export default connect(mapStateToProps)(TicketsScreen);
