import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';

import * as Navigation from '../../lib/utils/navigation';
import { Pallete, Strings } from '../../lib/constants';
import styles from './styles';
import Button from '../../components/Button';

export default function UnlinkedAccountScreen({ visible, close, email }) {
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
							Conta criada! {'\n'}
							Solicite seu vínculo!
						</Text>
					</View>

					<View style={styles.viewText}>
						<Text style={styles.text}>
							Olá! {'\n'}
							{'\n'}Seu cadastro foi realizado com sucesso:)
							{'\n'}
							{'\n'}Para que seu acesso seja liberado, informe o
							e-mail cadastrado ({`${email}`}) ao seu síndico ou
							administradora e solicite que o vincule a sua
							unidade. {'\n'}
							{'\n'}Após o vínculo ter sido realizado, clique
							abaixo para acesar o sistema. {'\n'}
							{'\n'}Desfrute das facilidades que o aplicativo
							proporciona.
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
	email: PropTypes.string,
};

UnlinkedAccountScreen.defaultProps = {
	visible: false,
	close: () => {},
	email: '',
};
