import React from 'react';
import { View, Text, Image } from 'react-native';
import Constants from 'expo-constants';

import logoClass from '../../assets/images/logo_class.png';
import { Pallete, General } from '../../lib/constants';
import styles from './styles';

const DESCRIPTION =
	'Faça suas reservas, fique a par do que está acontecendo em seu condomínio e acompanhe seus boletos. O aplicativo de gestão de Condomínios facilita o seu dia a dia.';

function AboutScreen() {
	const { version } = Constants.manifest;
	const textVersion = `Versão ${version}`;
	return (
		<View style={Pallete.screen}>
			<View style={styles.container}>
				<Text style={styles.description}>{DESCRIPTION}</Text>
				<View style={styles.middle}>
					<Image
						source={logoClass}
						style={styles.image}
						resizeMode="contain"
					/>
					<View style={General.section}>
						<Text style={styles.info}>Desenvolvido por</Text>
						<Text style={styles.info}>Class Code Software</Text>
					</View>
					<View style={General.section}>
						<Text style={styles.info}>
							contato@classcode.com.br
						</Text>
						<Text style={styles.info}>www.classcode.com.br</Text>
					</View>
				</View>
				<Text style={styles.version}>{textVersion}</Text>
			</View>
		</View>
	);
}

export default AboutScreen;
