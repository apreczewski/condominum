import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';

import Button from '../../../../components/Button';

import { Colors, Pallete, Strings } from '../../../../lib/constants';

import styles from './styles';

function ModalConfirmReserve({ visible, close, item, loading, submit }) {
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
							{Strings.confirmationReserve}
						</Text>
						<Text style={Pallete.paragraph}>
							{Strings.confirmReservation}
						</Text>
					</View>
					<View style={styles.marginBottomBig}>
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
					<View>
						<Button
							text={Strings.confirm}
							color="green"
							onPress={() => submit()}
							loading={loading}
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

ModalConfirmReserve.propTypes = {
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
	loading: PropTypes.bool,
	submit: PropTypes.func,
};

ModalConfirmReserve.defaultProps = {
	close: () => {},
	submit: () => {},
	loading: false,
};

export default ModalConfirmReserve;
