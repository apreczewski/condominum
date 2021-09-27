import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';

import Button from '../Button';

import { Colors, Pallete, Strings } from '../../lib/constants';

import styles from './styles';

function ModalConfirmAction({ visible, close, submit, description, loading }) {
	return (
		<Modal
			backdropOpacity={0.6}
			isVisible={visible}
			backdropTransitionInTiming={800}
			backdropTransitionOutTiming={200}
			animationInTiming={500}
			onBackdropPress={close}
			onRequestClose={close}>
			<View style={styles.container}>
				<View style={styles.content}>
					<Text style={Pallete.paragraph}>{description}</Text>
					<View style={styles.rowBtn}>
						<Button
							onPress={() => close()}
							text={Strings.no}
							background={Colors.white}
							containerStyle={styles.btnContainer}
						/>
						<Button
							onPress={() => submit()}
							text={Strings.yes}
							color="green"
							loading={loading}
							background={Colors.white}
							containerStyle={styles.btnContainer}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
}

ModalConfirmAction.propTypes = {
	visible: PropTypes.bool.isRequired,
	close: PropTypes.func,
	description: PropTypes.string,
	submit: PropTypes.func,
	loading: PropTypes.bool,
};

ModalConfirmAction.defaultProps = {
	close: () => {},
	submit: () => {},
	description: '',
	loading: false,
};

export default ModalConfirmAction;
