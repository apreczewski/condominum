import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import * as Navigation from '../../lib/utils/navigation';

export default function BalanceScreen() {
	return (
		<View>
			<Text>balancete</Text>
			<TouchableOpacity
				onPress={() => Navigation.navigate('BalanceDetails')}>
				<Text>detalhes balancete</Text>
			</TouchableOpacity>
		</View>
	);
}
