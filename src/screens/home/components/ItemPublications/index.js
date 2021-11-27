/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import styles from './styles';
import { Strings, Colors } from '../../../../lib/constants';
import * as Navigation from '../../../../lib/utils/navigation';

export const ItemPublications = ({ item }) => (
	<View style={styles.container}>
		<View style={styles.body}>
			<View style={styles.row}>
				<Text style={styles.h1}>{Strings.publication}</Text>
				<FontAwesome5
					name="comment"
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

					<Text style={styles.baseboard}>
						{moment(
							item[0]?.dt_pub_inicio,
							'DD-MM-YYYY HH: mm: ss',
						).format('DD/MM/YYYY')}
					</Text>
				</>
			) : (
				<Text>Você não possui publicações!</Text>
			)}
		</View>

		<TouchableOpacity
			style={styles.containerSeeAll}
			onPress={() => Navigation.navigate('Publicações')}>
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
			dt_pub_inicio: PropTypes.string,
		}),
	),
};

ItemPublications.defaultProps = {
	item: [
		{
			imagem: '',
			titulo: '',
			dt_pub_inicio: '',
		},
	],
};
