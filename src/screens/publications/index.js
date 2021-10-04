import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, ScrollView, FlatList, RefreshControl } from 'react-native';
import Modal from 'react-native-modal';

import { useFocusEffect } from '@react-navigation/native';
import { Colors, Pallete, Strings } from '../../lib/constants';
import { TitleSubTitleWithIcon } from '../../components/TitleSubTitleWithIcon';

import { ItemEmphasis } from './components/ItemEmphasis';
import { publicationsActions } from '../../store/actions';

import Item from './components/Item';
import styles from './styles';
import PublicationDetailsScreen from './components/publicationDetails';

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
		<ScrollView>
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
						item={list[2]}
						onPress={() => handlePublication(list[2])}
					/>

					<FlatList
						refreshControl={<RefreshControl refreshing={loading} />}
						data={list}
						keyExtractor={(item) => item?.id.toString()}
						renderItem={({ item, index }) =>
							index > 0 && (
								<Item
									item={item}
									isLast={index === list.length - 1}
									onPress={() => handlePublication(item)}
								/>
							)
						}
					/>
				</View>
			</View>
			<Modal
				backdropOpacity={0.6}
				isVisible={visible}
				backdropTransitionInTiming={800}
				backdropTransitionOutTiming={200}
				animationInTiming={500}
				onBackdropPress={() => handleModal(!visible)}
				onRequestClose={() => handleModal(!visible)}
				style={styles.modal}>
				{visible && (
					<PublicationDetailsScreen data={publicationCurrent} />
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
			id: PropTypes.string,
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
	onGet: async () => dispatch(publicationsActions.getList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PublicationsScreen);
