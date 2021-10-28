import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, ScrollView, FlatList, RefreshControl } from 'react-native';
import Modal from 'react-native-modal';

import { useFocusEffect } from '@react-navigation/native';
import { Colors, Pallete, Strings } from '../../lib/constants';
import { TitleSubTitleWithIcon } from '../../components/TitleSubTitleWithIcon';

import { Item } from './components/Item';
import { ItemEmphasis } from './components/ItemEmphasis';
import styles from './styles';
import PublicationDetailsScreen from './components/publicationDetails';

import { publicationsActions } from '../../store/actions';
import {} from '../../store/ducks/publications/reducers';

function PublicationsScreen({ onGet, loading, list }) {
	const [visible, setVisible] = useState(false);
	const [publicationCurrent, setPublicationCurrent] = useState(null);

	useFocusEffect(
		React.useCallback(() => {
			onGet();
		}, []),
	);

	const handleModal = (status) => {
		if (status) {
			setVisible(status);
			return;
		}
		setVisible(status);
	};

	const handlePublication = useCallback((item) => {
		setPublicationCurrent(item);

		handleModal(!visible);
	}, []);

	return (
		<ScrollView
			vertical
			refreshControl={<RefreshControl refreshing={loading} />}>
			<View style={Pallete.screen}>
				<TitleSubTitleWithIcon
					title={Strings.publication}
					subTitle={Strings.publicationDescription}>
					<MaterialCommunityIcons
						name="tooltip-text-outline"
						size={42}
						color={Colors.primary}
					/>
				</TitleSubTitleWithIcon>

				<View style={styles.list}>
					<ItemEmphasis
						item={list[0]}
						onPress={
							() => handlePublication(list[0].id) //
						}
					/>

					{list && (
						<FlatList
							data={list}
							keyExtractor={(itemCurrent) =>
								itemCurrent?.id.toString()
							}
							renderItem={({ item, index }) =>
								index > 0 && (
									<Item
										item={item}
										isLast={index === list.length - 1}
										onPress={() =>
											handlePublication(item.id)
										}
									/>
								)
							}
						/>
					)}
				</View>
			</View>
			<Modal
				backdropOpacity={0.2}
				isVisible={visible}
				backdropTransitionInTiming={800}
				backdropTransitionOutTiming={200}
				animationInTiming={500}
				onBackdropPress={() => handleModal(!visible)}
				onRequestClose={() => handleModal(!visible)}>
				{visible && (
					<PublicationDetailsScreen
						close={() => setVisible(false)}
						idCurrent={publicationCurrent}
					/>
				)}
			</Modal>
		</ScrollView>
	);
}

PublicationsScreen.propTypes = {
	onGet: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	list: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			url: PropTypes.string,
			title: PropTypes.string,
			subTitle: PropTypes.string,
			date: PropTypes.string,
			like: PropTypes.bool,
		}),
	).isRequired,
};

const mapStateToProps = (state) => ({
	loading: state.api.loading,
	list: state.publications.list,
});

const mapDispatchToProps = (dispatch) => ({
	onGet: () => dispatch(publicationsActions.getList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PublicationsScreen);
