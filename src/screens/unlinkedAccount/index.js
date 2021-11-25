import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';

import * as Navigation from '../../lib/utils/navigation';
import { Pallete, Strings } from '../../lib/constants';
import styles from './styles';
import Button from '../../components/Button';

export default function UnlinkedAccountScreen({ visible, close }) {
	return (
		<Modal
			backdropOpacity={0.2}
			isVisible={visible}
			backdropTransitionInTiming={800}
			backdropTransitionOutTiming={200}
			animationInTiming={500}
			onBackdropPress={close}
			onRequestClose={close}>
			<ScrollView>
				<View style={Pallete.screen}>
					<View style={styles.viewTitle}>
						<Text style={styles.title}>
							Conta criada! Solicite seu vínculo!
						</Text>
					</View>

					<View style={styles.viewText}>
						<Text style={styles.text}>
							{Strings.unlinkedAccountText}
						</Text>
					</View>

					<Button
						text={Strings.access}
						onPress={() => {
							close();
							Navigation.navigate('Auth');
						}}
					/>
				</View>
			</ScrollView>
		</Modal>
	);
}

UnlinkedAccountScreen.propTypes = {
	visible: PropTypes.bool,
	close: PropTypes.func,
};

UnlinkedAccountScreen.defaultProps = {
	visible: false,
	close: () => {},
};
