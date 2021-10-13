import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
/* import PropTypes from 'prop-types'; */
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import publication from '../../../../assets/images/publication.png';
import { Strings, Colors } from '../../../../lib/constants';
import * as Navigation from '../../../../lib/utils/navigation';

export const ItemPublications = () => (
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

			<Image source={publication} style={styles.image} />

			<Text style={styles.title}>Uso de máscaras</Text>

			<Text style={styles.baseboard}>Prolar - Há 4 horas</Text>
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
