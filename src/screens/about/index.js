import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Constants from 'expo-constants';
import { Pallete, General, Colors } from '../../lib/constants';
import logoClass from '../../assets/images/logo_class.png';

const styles = StyleSheet.create({
	container: {
		...General.container,
		justifyContent: 'space-between',
		padding: 20,
	},

	description: {
		...Pallete.regularLight,
		color: Colors.secondary,
	},
	image: {
		...General.section,
		height: 50,
		width: 200,
	},
	info: {
		...Pallete.inputRegular,
		color: Colors.secondary,
		textAlign: 'center',
	},
	middle: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	version: {
		...Pallete.regularLight,
		color: Colors.secondary,
		marginBottom: 40,
		textAlign: 'center',
	},
});

const DESCRIPTION =
	'Está na sua mão economizar. MultiMercados oferece descontos e ofertas exclusivas, entre outras facilidades para o seu dia a dia.';

function AboutScreen() {
	const { version } = Constants.manifest;
	const textVersion = `Versão ${version}`;
	return (
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
					<Text style={styles.info}>contato@classcode.com.br</Text>
					<Text style={styles.info}>www.classcode.com.br</Text>
				</View>
			</View>
			<Text style={styles.version}>{textVersion}</Text>
		</View>
	);
}

export default AboutScreen;
