import React from 'react';
import { FlatList, StyleSheet, View, RefreshControl } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { helpActions } from '../../store/actions';

import { General, Colors } from '../../lib/constants';
import * as RootNavigator from '../../lib/utils/navigation';

import Item from './components/Item';

const styles = StyleSheet.create({
	border: {
		borderBottomColor: Colors.secondary_470,
		borderBottomWidth: 1,
	},
	container: {
		...General.container,
		padding: 20,
	},
	footer: {
		paddingBottom: 20,
	},
});

const separator = () => <View style={styles.border} />;

function HelpScreen({ loading, onGet, help }) {
	useFocusEffect(
		React.useCallback(() => {
			onGet();
		}, []),
	);

	return (
		<FlatList
			refreshControl={<RefreshControl refreshing={loading} />}
			style={styles.container}
			data={help}
			keyExtractor={(item) => item.id.toString()}
			ItemSeparatorComponent={() => separator()}
			ListFooterComponent={() => <View />}
			ListFooterComponentStyle={styles.footer}
			renderItem={({ item }) => (
				<Item
					item={item}
					onPress={() =>
						RootNavigator.navigate('HelpDetails', { item })
					}
				/>
			)}
		/>
	);
}

const mapStateToProps = (state) => ({
	loading: state.api.loading,
	help: state.help.help,
});

const mapDispatchToProps = (dispatch) => ({
	onGet: () => dispatch(helpActions.getHelp()),
});

HelpScreen.propTypes = {
	onGet: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	help: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HelpScreen);
