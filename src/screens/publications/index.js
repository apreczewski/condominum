import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, ScrollView, FlatList, RefreshControl } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import * as RootNavigator from '../../lib/utils/navigation';
import { Colors, Pallete, Strings } from '../../lib/constants';
import TitleSubTitleWithIcon from '../../components/TitleSubTitleWithIcon';

import { PublicationEmphasis } from './components/PublicationEmphasis';
import { publicationsActions } from '../../store/actions';

import Item from './components/Item';
import styles from './styles';

function PublicationsScreen({ onGet, loading, list }) {
	useFocusEffect(
		React.useCallback(() => {
			onGet();
		}, []),
	);

	return (
		<ScrollView>
			<View style={Pallete.screen}>
				<TitleSubTitleWithIcon
					title={Strings.publication}
					subTitle={Strings.publicationDescription}>
					<MaterialCommunityIcons
						name="tooltip-text-outline"
						size={50}
						color={Colors.secondary}
					/>
				</TitleSubTitleWithIcon>
				<View style={styles.body} />

				<View>
					<PublicationEmphasis
						item={list[0]}
						onPress={() => {
							RootNavigator.navigate('PublicationExpanded', {
								item: list[0],
							});
						}}
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
											'PublicationExpanded',
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

PublicationsScreen.propTypes = {
	onGet: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	list: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			url: PropTypes.string,
			title: PropTypes.string,
			subTitle: PropTypes.string,
			date: PropTypes.string,
			like: PropTypes.string,
		}),
	).isRequired,
};

const mapStateToProps = (state) => ({
	loading: state.api.loading,
	list: state.publication.list,
});

const mapDispatchToProps = (dispatch) => ({
	onGet: () => dispatch(publicationsActions.getList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PublicationsScreen);
