/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import { EvilIcons, FontAwesome, MaterialIcons } from '@expo/vector-icons';

import styles from './styles';
import { Strings, Colors } from '../../../../lib/constants';
import { ValueFormat } from '../../../../lib/utils/formatCurrency';
import * as Navigation from '../../../../lib/utils/navigation';

export const ItemTickets = ({ item }) => {
	const icon = {
		'aguardando pagamento': 'clock',
		atrasado: 'close-o',
		pago: 'check',
	};

	const colors = {
		'aguardando pagamento': Colors.secondary,
		atrasado: Colors.primary,
		pago: Colors.green,
	};

	return (
		<View style={styles({}).container}>
			<View style={styles({}).body}>
				<View style={styles({}).row}>
					<Text style={styles({}).h2}>{Strings.tickets}</Text>
					<FontAwesome
						name="barcode"
						size={30}
						color={Colors.secondary}
					/>
				</View>

				{item.length ? (
					<>
						<ValueFormat
							style={styles({}).h1}
							value={parseFloat(item[0]?.valor)}
						/>

						<View style={styles({}).rowForLeft}>
							<Text style={styles({}).h3}>Vencimento:</Text>
							<Text style={styles({}).h2}>
								{moment(
									item[0]?.vencimento,
									'DD-MM-YYYY HH: mm: ss',
								).format('DD/MM/YYYY')}
							</Text>
						</View>

						<View
							style={
								styles({
									borderColor: colors[item[0]?.situacao],
								}).label
							}>
							<EvilIcons
								name={icon[item[0]?.situacao]}
								size={30}
								color={colors[item[0]?.situacao]}
							/>
							<Text
								style={
									styles({ color: colors[item[0]?.situacao] })
										.text
								}>
								{item[0]?.situacao}
							</Text>
						</View>
					</>
				) : (
					<Text>Você não possui boletos!</Text>
				)}
			</View>

			<TouchableOpacity
				style={styles({}).containerSeeAll}
				onPress={() => Navigation.navigate('Boletos')}>
				<Text style={styles({}).h2}>Ver todos</Text>
				<MaterialIcons
					name="arrow-forward-ios"
					size={30}
					color={Colors.secondary}
				/>
			</TouchableOpacity>
		</View>
	);
};

ItemTickets.propTypes = {
	item: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			valor: PropTypes.string,
			situacao: PropTypes.string,
			vencimento: PropTypes.string,
		}),
	),
};

ItemTickets.defaultProps = {
	item: [
		{
			id: 0,
			valor: '',
			situacao: '',
			vencimento: '',
		},
	],
};
