import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
/* import PropTypes from 'prop-types'; */
import {
	Feather,
	MaterialCommunityIcons,
	MaterialIcons,
} from '@expo/vector-icons';
import styles from './styles';
import { Colors } from '../../../../lib/constants';
import * as Navigation from '../../../../lib/utils/navigation';

export const ItemSchedules = () => (
	<View style={styles.container}>
		<View style={styles.body}>
			<View style={styles.row}>
				<Text style={styles.h1}>Agendamentos</Text>
				<MaterialCommunityIcons
					name="calendar-month-outline"
					size={30}
					color={Colors.secondary}
				/>
			</View>

			<Text style={styles.text}>Nenhum agendamento realizado.</Text>

			<View style={styles.rowForLeft}>
				<Feather name="plus" size={25} color={Colors.primary} />
				<Text style={styles.baseboard}>Novo agendamento</Text>
			</View>
		</View>

		<TouchableOpacity
			style={styles.containerSeeAll}
			onPress={() => Navigation.navigate('Reserves')}>
			<Text style={styles.h1}>Ver todos</Text>
			<MaterialIcons
				name="arrow-forward-ios"
				size={30}
				color={Colors.secondary}
			/>
		</TouchableOpacity>
	</View>
);
