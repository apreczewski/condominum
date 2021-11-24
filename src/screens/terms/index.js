import React from 'react';
import { ScrollView, RefreshControl, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import PropTypes from 'prop-types';
import styles from './styles';

import { helpActions } from '../../store/actions';
import { Pallete } from '../../lib/constants';

function TermsScreen({ loading, onGet, terms }) {
	useFocusEffect(
		React.useCallback(() => {
			onGet();
		}, []),
	);

	return (
		<ScrollView
			refreshControl={<RefreshControl refreshing={loading} />}
			style={Pallete.screen}>
			<View style={styles.container}>
				<Text style={styles.title}>{terms[0].title}</Text>
				<Text style={styles.text}>{terms[0].text}</Text>
			</View>
		</ScrollView>
	);
}

const mapStateToProps = (state) => ({
	loading: state.api.loading,
	terms: state.help.terms,
});

const mapDispatchToProps = (dispatch) => ({
	onGet: () => dispatch(helpActions.getTerms()),
});

TermsScreen.propTypes = {
	onGet: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	terms: PropTypes.arrayOf(
		PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }),
	).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TermsScreen);
