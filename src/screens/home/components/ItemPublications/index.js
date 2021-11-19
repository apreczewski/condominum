/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import styles from './styles';
import { Strings, Colors } from '../../../../lib/constants';
import * as Navigation from '../../../../lib/utils/navigation';

export const ItemPublications = ({ item }) => (
	<View style={styles.container}>
		<View style={styles.body}>
			<View style={styles.row}>
				<Text style={styles.h1}>{Strings.publication}</Text>
				<MaterialCommunityIcons
					name="tooltip-text-outline"
					size={30}
					color={Colors.secondary}
				/>
			</View>

			{item.length ? (
				<>
					<Image
						source={{ uri: item[0]?.imagem }}
						style={styles.image}
					/>

					<Text style={styles.title}>{item[0]?.titulo}</Text>

					<Text style={styles.baseboard}>{item[0]?.dt_pub_fim}</Text>
				</>
			) : (
				<Text style={styles}>Você não possui publicações!</Text>
			)}
		</View>

		<TouchableOpacity
			style={styles.containerSeeAll}
			onPress={() => Navigation.navigate('Publications')}>
			<Text style={styles.h1}>Ver todas</Text>
			<MaterialIcons
				name="arrow-forward-ios"
				size={30}
				color={Colors.secondary}
			/>
		</TouchableOpacity>
	</View>
);

ItemPublications.propTypes = {
	item: PropTypes.arrayOf(
		PropTypes.shape({
			imagem: PropTypes.string,
			titulo: PropTypes.string,
			dt_pub_fim: PropTypes.string,
		}),
	),
};

ItemPublications.defaultProps = {
	item: [
		{
			imagem: '',
			titulo: '',
			dt_pub_fim: '',
		},
	],
};
