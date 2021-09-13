import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';

import styles from './styles';

function ModalInfoAmbient({ visible, close }) {
	return (
		<Modal
			backdropOpacity={0.2}
			isVisible={visible}
			backdropTransitionInTiming={800}
			backdropTransitionOutTiming={200}
			animationInTiming={500}
			onBackdropPress={close}
			onRequestClose={close}>
			<View styles={styles.container}>
				<View styles={styles.content}>
					<Text>modal</Text>
				</View>
			</View>
		</Modal>
	);
}

ModalInfoAmbient.propTypes = {
	visible: PropTypes.bool.isRequired,
	close: PropTypes.func,
};

ModalInfoAmbient.defaultProps = {
	close: () => {},
};

export default ModalInfoAmbient;
