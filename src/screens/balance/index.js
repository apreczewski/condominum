import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { View, ScrollView, FlatList, RefreshControl } from 'react-native';

import * as RootNavigator from '../../lib/utils/navigation';
import { Colors, Pallete, Strings } from '../../lib/constants';
import FeaturedItem from '../../components/FeaturedItem';
import TitleSubTitleWithIcon from '../../components/TitleSubTitleWithIcon';

import Item from './components/Item';
import styles from './styles';

function BalanceScreen({ list }) {
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

export default connect(mapStateToProps)(BalanceScreen);
