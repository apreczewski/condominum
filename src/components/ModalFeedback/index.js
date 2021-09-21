import React from 'react';
import { View, Text, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { AntDesign } from '@expo/vector-icons';

import { Colors, Pallete } from '../../lib/constants';

import styles from './styles';

function ModalFeedback({ visible, close, type, description, title }) {
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
					<Pressable style={styles.close} onPress={close}>
						<AntDesign
							name="close"
							size={35}
							color={Colors.tertiary}
						/>
					</Pressable>
					{type === 'success' ? (
						<AntDesign
							name="checkcircleo"
							size={60}
							color={Colors.green}
						/>
					) : (
						<AntDesign
							name="closecircleo"
							size={60}
							color={Colors.error}
						/>
					)}
					<Text style={[Pallete.h3, styles.text]}>{title}</Text>
					{description !== '' ? (
						<Text style={[Pallete.paragraph, styles.text]}>
							{description}
						</Text>
					) : null}
				</View>
			</View>
		</Modal>
	);
}

ModalFeedback.propTypes = {
	visible: PropTypes.bool.isRequired,
	close: PropTypes.func,
	type: PropTypes.string,
	description: PropTypes.string,
	title: PropTypes.string,
};

ModalFeedback.defaultProps = {
	close: () => {},
	type: 'success',
	description: '',
	title: '',
};

export default ModalFeedback;
