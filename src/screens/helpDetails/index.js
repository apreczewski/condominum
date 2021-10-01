import React from 'react';
import { Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { General, Pallete, Colors } from '../../lib/constants';

const styles = StyleSheet.create({
	container: {
		...General.container,
		padding: 20,
	},
	description: {
		...Pallete.regularLight,
		color: Colors.tertiary,
	},
	title: {
		...Pallete.tabBold,
		color: Colors.tertiary,
		marginBottom: 40,
	},
});

function HelpDetailsScreen({ route }) {
	const { item } = route.params;
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<Text style={styles.title}>{item.titulo}</Text>
				<Text style={styles.description}>{item.texto}</Text>
			</ScrollView>
		</SafeAreaView>
	);
}

HelpDetailsScreen.propTypes = {
	route: PropTypes.shape({
		params: PropTypes.shape({
			item: PropTypes.shape({
				titulo: PropTypes.string,
				texto: PropTypes.string,
			}),
		}),
	}).isRequired,
};

export default HelpDetailsScreen;
