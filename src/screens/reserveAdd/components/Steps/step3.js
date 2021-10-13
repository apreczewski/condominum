import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import moment from 'moment';
import RadioButton from '../../../../components/RadioButton';
import Button from '../../../../components/Button';

import { Pallete, Strings, Colors } from '../../../../lib/constants';

import styles from './styles';

export default function Step3({
	hours,
	select,
	selectAmbient,
	selectDay,
	onSelect,
	onSelectInfo,
	next,
}) {
	return (
		<View style={styles.view}>
			<View style={styles.viewHeader}>
				<Text style={Pallete.h1}>{Strings.reserveAdd}</Text>
				<Text style={Pallete.paragraph}>{Strings.selectHour}</Text>
			</View>
			<View style={styles.cardInfoSelect}>
				<View style={styles.rowSpace}>
					<View style={styles.row}>
						<Image
							source={{ uri: selectAmbient.image }}
							resizeMode="cover"
							style={styles.imgAmbient}
						/>
						<Text style={Pallete.h5Primary}>
							{selectAmbient.title}
						</Text>
					</View>
					<TouchableOpacity
						onPress={() => {
							onSelectInfo(selectAmbient);
						}}>
						<Feather name="info" size={24} color={Colors.primary} />
					</TouchableOpacity>
				</View>
				<View style={styles.row}>
					<Text style={Pallete.h5Primary}>{`${Strings.date} `}</Text>
					<Text style={Pallete.h5Primary}>
						{moment(selectDay).format('DD/MM/YYYY')}
					</Text>
				</View>
				<View style={styles.row}>
					<Text style={Pallete.h5Primary}>
						{`${Strings.usageFee} `}
					</Text>
					<Text style={Pallete.h5Primary}>{selectAmbient.tax}</Text>
				</View>
			</View>
			<FlatList
				data={hours}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<View style={styles.cardAmbient}>
						<RadioButton
							onPress={() => onSelect(item)}
							label={`${item.start} às ${item.end}`}
							select={select?.id === item.id}
							disabled={
								item.status === 'Bloqueado' ||
								item.status === 'Indisponível'
							}
						/>
						{item.status === 'Bloqueado' ||
						item.status === 'Indisponível' ? (
							<Text style={styles.statusTxt}>{item.status}</Text>
						) : null}
					</View>
				)}
			/>
			<View style={styles.viewButtons}>
				<Button
					text={Strings.continue}
					onPress={() => next(3)}
					disabled={!select}
				/>
			</View>
		</View>
	);
}

Step3.propTypes = {
	select: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({})])
		.isRequired,
	selectDay: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
		.isRequired,
	selectAmbient: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({})])
		.isRequired,
	onSelect: PropTypes.func.isRequired,
	next: PropTypes.func.isRequired,
	onSelectInfo: PropTypes.func.isRequired,
	hours: PropTypes.arrayOf(PropTypes.shape({})),
};

Step3.defaultProps = {
	hours: [],
};
