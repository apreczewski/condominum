import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Pallete, Strings, Colors } from '../../lib/constants';

import styles from './styles';

export default function ReservesScreen() {
	return (
		<View style={Pallete.screen}>
			<View style={styles.row}>
				<View>
					<Text style={Pallete.h1}>{Strings.reserve}</Text>
					<Text style={Pallete.paragraph}>
						{Strings.reserveDescription}
					</Text>
				</View>
				<TouchableOpacity style={styles.addBtn}>
					<MaterialCommunityIcons
						name="plus-circle-outline"
						size={27}
						color={Colors.primary}
					/>
					<Text style={styles.addText}>{Strings.add}</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
