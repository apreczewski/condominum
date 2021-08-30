import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import * as Navigation from '../../lib/utils/navigation';

export default function TicketScreen() {
	return (
		<View>
			<Text>boletos</Text>
			<TouchableOpacity
				onPress={() => Navigation.navigate('TicketDetails')}>
				<Text>detalhes boleto</Text>
			</TouchableOpacity>
		</View>
	);
}
