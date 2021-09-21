import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import moment from 'moment';

import RadioButton from '../../../../components/RadioButton';
import Button from '../../../../components/Button';

import { Pallete, Strings, Colors } from '../../../../lib/constants';

import styles from './styles';

export default function Step4({
	selectHour,
	selectAmbient,
	selectDay,
	onSelectInfo,
	accept,
	setAccept,
	cancel,
	submit,
}) {
	return (
		<View style={styles.view}>
			<View style={styles.viewHeader}>
				<Text style={Pallete.h1}>{Strings.reserveAdd}</Text>
				<Text style={Pallete.paragraph}>
					{Strings.checkDataReserve}
				</Text>
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
						{`${Strings.period}: `}
					</Text>
					<Text style={Pallete.h5Primary}>{selectHour?.start}</Text>
					<Text style={Pallete.h5Primary}>{` ${Strings.to} `}</Text>
					<Text style={Pallete.h5Primary}>{selectHour?.end}</Text>
				</View>
				<View style={styles.row}>
					<Text style={Pallete.h5Primary}>
						{`${Strings.usageFee} `}
					</Text>
					<Text style={Pallete.h5Primary}>{selectAmbient.tax}</Text>
				</View>
			</View>
			<View style={styles.cardInfoSelect}>
				<Text style={styles.titleRules}>{Strings.rulesOfUse}</Text>
				<ScrollView
					style={styles.rulesView}
					showsVerticalScrollIndicator={false}>
					<Text style={Pallete.paragraph}>{selectAmbient.rules}</Text>
				</ScrollView>
				<RadioButton
					type="square"
					contentStyle={styles.checkboxRules}
					label={Strings.readAndAgree}
					colorLabel={Colors.primary}
					select={accept}
					onPress={() => setAccept(!accept)}
				/>
			</View>
			<View style={styles.viewButtons}>
				<Button
					text={Strings.confirmReservation}
					disabled={!accept}
					color="green"
					onPress={() => submit()}
				/>
				<Button
					text={Strings.cancelReservation}
					containerStyle={styles.marginBtn}
					onPress={() => cancel()}
				/>
			</View>
		</View>
	);
}

Step4.propTypes = {
	selectHour: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({})])
		.isRequired,
	selectDay: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
		.isRequired,
	selectAmbient: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({})])
		.isRequired,
	accept: PropTypes.bool.isRequired,
	onSelectInfo: PropTypes.func.isRequired,
	setAccept: PropTypes.func.isRequired,
	cancel: PropTypes.func.isRequired,
	submit: PropTypes.func.isRequired,
};
