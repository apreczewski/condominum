import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
/* import PropTypes from 'prop-types'; */
import { EvilIcons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import { Strings, Colors } from '../../../../lib/constants';
import { ValueFormat } from '../../../../lib/utils/formatCurrency';
import * as Navigation from '../../../../lib/utils/navigation';

export const ItemTickets = () => {
	/* const icon = {
	0: 'clock',
	1: 'close-o',
	2: 'check',
}; */

	const colors = {
		0: Colors.secondary,
		1: Colors.primary,
		2: Colors.green,
	};

	return (
		<View style={styles.container}>
			<View style={styles.body}>
				<View style={styles.row}>
					<Text style={styles.h2}>{Strings.tickets}</Text>
					<FontAwesome
						name="barcode"
						size={30}
						color={Colors.secondary}
					/>
				</View>

				<ValueFormat style={styles.h1} value={500.04} />

				<View style={styles.rowForLeft}>
					<Text style={styles.h3}>Vencimento:</Text>
					<Text style={styles.h2}>05/06/2021</Text>
				</View>

				<View style={styles.label}>
					<EvilIcons name="clock" size={30} color={colors[0]} />
					<Text style={styles.text}>Aguardando pagamento</Text>
				</View>
			</View>

			<TouchableOpacity
				style={styles.containerSeeAll}
				onPress={() => Navigation.navigate('Ticket')}>
				<Text style={styles.h2}>Ver todos</Text>
				<MaterialIcons
					name="arrow-forward-ios"
					size={30}
					color={Colors.secondary}
				/>
			</TouchableOpacity>
		</View>
	);
};
