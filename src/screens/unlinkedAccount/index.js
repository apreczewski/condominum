import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Pallete, Strings } from '../../lib/constants';
import styles from './styles';
import Button from '../../components/Button';

export default function UnlinkedAccountScreen() {
	return (
		<ScrollView>
			<View style={Pallete.screen}>
				<View style={styles.viewTitle}>
					<Text style={styles.title}>
						Conta criada! Solicite seu vínculo!
					</Text>
				</View>

				<View style={styles.viewText}>
					{/* <Text style={styles.text}>
						Olá! Seu cadastro foi realizado com sucesso:) Para que
						seu acesso seja liberado, informe o e-mail cadastrado
						(xyz@.gmai.com) ao seu síndico ou administradora e
						solicite que o vincule a sua unidade. Após o vínculo ter
						sido realizado, clique abaixo para acesar o sistema.
						Desfrute das facilidades que o aplicativo proporciona.
					</Text> */}

					<Text style={styles.text}>Olá!</Text>

					<Text style={styles.text}>
						Seu cadastro foi realizado com sucesso:) Para que seu
						acesso seja liberado, informe o e-mail cadastrado
						(xyz@.gmai.com) ao seu síndico ou administradora e
						solicite que o vincule a sua unidade.
					</Text>

					<Text style={styles.text}>
						Após o vínculo ter sido realizado, clique abaixo para
						acesar o sistema.
					</Text>

					<Text style={styles.text}>
						Desfrute das facilidades que o aplicativo proporciona.
					</Text>
				</View>

				<Button text={Strings.access} onPress={() => ''} />
			</View>
		</ScrollView>
	);
}
