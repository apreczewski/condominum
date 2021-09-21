import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import moment from 'moment';
import Button from '../../../../components/Button';

import { Pallete, Strings, Colors } from '../../../../lib/constants';

import styles from './styles';

LocaleConfig.locales.br = {
	monthNames: [
		'Janeiro',
		'Fevereiro',
		'Março',
		'Abril',
		'Maio',
		'Junho',
		'Julho',
		'Agosto',
		'Setembro',
		'Outubro',
		'Novembro',
		'Dezembro',
	],
	monthNamesShort: [
		'Jan.',
		'Fev.',
		'Mar',
		'Abr',
		'Mai',
		'Jun',
		'Jul.',
		'Ago',
		'Set.',
		'Out.',
		'Nov.',
		'Dez.',
	],
	dayNames: [
		'Domingo',
		'Segunda',
		'Terça',
		'Quarta',
		'Quinta',
		'Sexta',
		'Sábado',
	],
	dayNamesShort: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
};

LocaleConfig.defaultLocale = 'br';

export default function Step2({
	onSelect,
	select,
	next,
	selectAmbient,
	onSelectInfo,
}) {
	const dates = {};

	if (select) {
		dates[select] = {
			selected: true,
			selectedColor: Colors.primary,
		};
	}

	return (
		<View style={styles.view}>
			<View style={styles.viewHeader}>
				<Text style={Pallete.h1}>{Strings.reserveAdd}</Text>
				<Text style={Pallete.paragraph}>
					{Strings.selectDayOnCalendar}
				</Text>
			</View>
			<View style={styles.cardAmbient}>
				<View style={styles.row}>
					<Image
						source={{ uri: selectAmbient.image }}
						resizeMode="cover"
						style={styles.imgAmbient}
					/>
					<Text style={Pallete.h5Primary}>{selectAmbient.title}</Text>
				</View>
				<TouchableOpacity
					onPress={() => {
						onSelectInfo(selectAmbient);
					}}>
					<Feather name="info" size={24} color={Colors.primary} />
				</TouchableOpacity>
			</View>
			<Calendar
				onDayPress={(day) => onSelect(day.dateString)}
				markedDates={dates}
				markingType="custom"
				minDate={moment().format('YYYY-MM-DD')}
				style={styles.calendar}
				theme={{
					arrowColor: Colors.secondary,
					dayTextColor: Colors.secondary,
					textDayHeaderFontSize: 16,
					todayTextColor: Colors.primary,
					textMonthFontSize: 16,
					textDayFontFamily: 'Roboto-Regular',
					textMonthFontFamily: 'Roboto-Regular',
					textDayHeaderFontFamily: 'Roboto-Regular',
				}}
			/>
			<View style={styles.viewButtons}>
				<Button
					text={Strings.continue}
					onPress={() => next(2)}
					disabled={!select}
				/>
			</View>
		</View>
	);
}

Step2.propTypes = {
	select: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
	selectAmbient: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({})])
		.isRequired,
	onSelect: PropTypes.func.isRequired,
	next: PropTypes.func.isRequired,
	onSelectInfo: PropTypes.func.isRequired,
};
