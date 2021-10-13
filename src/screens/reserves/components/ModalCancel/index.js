import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';

import RadioButton from '../../../../components/RadioButton';
import Button from '../../../../components/Button';

import { Colors, Pallete, Strings } from '../../../../lib/constants';

import styles from './styles';

function ModalCancel({ visible, close, item, reasons, loading }) {
	const [select, setSelect] = useState(false);

	return (
		<Modal
			backdropOpacity={0.2}
			isVisible={visible}
			backdropTransitionInTiming={800}
			backdropTransitionOutTiming={200}
			animationInTiming={500}
			onBackdropPress={close}
			onRequestClose={close}>
			<View style={styles.container}>
				<View style={styles.content}>
					<View style={styles.marginBottomBig}>
						<Text style={Pallete.h1}>
							{Strings.cancellationReserve}
						</Text>
						<Text style={Pallete.paragraph}>
							{Strings.confirmCancellation}
						</Text>
					</View>
					<View>
						<View style={styles.marginBottomBig}>
							<Text style={Pallete.h5Secondary}>
								{item.condo}
							</Text>
							<Text style={Pallete.h5Primary}>{item.title}</Text>
							<Text style={Pallete.h5Secondary}>
								{item.client}
							</Text>
						</View>
						<View style={styles.row}>
							<Text
								style={
									Pallete.paragraph
								}>{`${Strings.date} `}</Text>
							<Text style={Pallete.paragraph}>{item.date}</Text>
						</View>
						<View style={styles.row}>
							<Text style={Pallete.paragraph}>
								{`${Strings.period}: `}
							</Text>
							<Text style={Pallete.paragraph}>{item.start}</Text>
							<Text
								style={
									Pallete.paragraph
								}>{` ${Strings.to} `}</Text>
							<Text style={Pallete.paragraph}>{item.end}</Text>
						</View>
						<View style={styles.row}>
							<Text style={Pallete.paragraph}>
								{`${Strings.usageFee} `}
							</Text>
							<Text style={Pallete.paragraph}>{item.tax}</Text>
						</View>
					</View>
					<ScrollView
						showsVerticalScrollIndicator={false}
						style={styles.maxSize}
						contentContainerStyle={styles.viewText}>
						<Text
							style={[Pallete.h5Secondary, styles.marginBottom]}>
							{Strings.reason}
						</Text>
						{reasons.map((value) => (
							<View key={value.id} style={styles.marginBottom}>
								<RadioButton
									onPress={() => setSelect(value)}
									label={value.name}
									select={select?.id === value.id}
								/>
							</View>
						))}
					</ScrollView>
					<View>
						<Button
							text={Strings.confirm}
							disabled={!select}
							color="green"
							loading={loading}
							onPress={() => close()}
							background={Colors.white}
						/>
						<Button
							text={Strings.close}
							containerStyle={styles.marginBtn}
							onPress={() => close()}
							background={Colors.white}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
}

ModalCancel.propTypes = {
	visible: PropTypes.bool.isRequired,
	close: PropTypes.func,
	item: PropTypes.shape({
		tax: PropTypes.string,
		condo: PropTypes.string,
		title: PropTypes.string,
		client: PropTypes.string,
		date: PropTypes.string,
		start: PropTypes.string,
		end: PropTypes.string,
	}).isRequired,
	reasons: PropTypes.arrayOf(PropTypes.shape({})),
	loading: PropTypes.bool,
};

ModalCancel.defaultProps = {
	close: () => {},
	reasons: [],
	loading: false,
};

export default ModalCancel;
