import React from 'react';
import { ScrollView, RefreshControl, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import PropTypes from 'prop-types';
import styles from './styles';

import { helpActions } from '../../store/actions';
import { Pallete } from '../../lib/constants';

function PolicesScreen({ loading, onGet, polices }) {
	useFocusEffect(
		React.useCallback(() => {
			onGet();
		}, []),
	);

	return (
		<ScrollView
			refreshControl={<RefreshControl refreshing={loading} />}
			style={Pallete.screen}>
			{polices.length > 0 && (
				<View style={styles.container}>
					<Text style={styles.title}>{polices[1].title}</Text>
					<Text style={styles.text}>{polices[1].text}</Text>
				</View>
			)}
		</ScrollView>
	);
}

const mapStateToProps = (state) => ({
	loading: state.api.loading,
	polices: state.help.terms,
});

const mapDispatchToProps = (dispatch) => ({
	onGet: () => dispatch(helpActions.getTerms()),
});

PolicesScreen.propTypes = {
	onGet: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	polices: PropTypes.arrayOf(
		PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }),
	).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PolicesScreen);
