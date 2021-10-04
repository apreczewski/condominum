import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Form } from '@unform/mobile';
import PropTypes from 'prop-types';
import { Pallete, Strings } from '../../lib/constants';
import Button from '../Button';

import styles from './styles';
import Input from '../Input';

export default function CreateUser({
	formRef,
	onSubmit,
	onPress,
	nameButton,
	data,
}) {
	return (
		<ScrollView vertical>
			<View style={Pallete.screen}>
				<Text style={styles.text}>{Strings.createUserText}</Text>

				<Form ref={formRef} onSubmit={onSubmit}>
					<Input
						name="email"
						label="E-mail"
						valueCurrent={data?.email}
						autoCorrect={false}
						labelError="Digite um e-mail válido!"
						autoCapitalize="none"
						keyboardType="email-address"
						placeholder="E-mail"
					/>

					<Input
						name="name"
						label="Nome Completo"
						valueCurrent={data?.name}
						autoCorrect={false}
						labelError="Digite nome completo!"
						autoCapitalize="none"
						keyboardType="text"
						placeholder="Nome Completo"
					/>

					<Input
						name="nameSocial"
						label="Nome Social"
						valueCurrent={data?.nameSocial}
						autoCorrect={false}
						labelError="Digite nome social!"
						autoCapitalize="none"
						keyboardType="text"
						placeholder="Nome com o qual deseja ser tratado"
					/>

					<Input
						name="phone"
						label="Telefone"
						valueCurrent={data?.phone}
						autoCorrect={false}
						labelError="Digite um telefone"
						keyboardType="phone-pad"
						placeholder="(   ) ___________"
					/>

					<Input
						name="cpfCnpj"
						label="CPF/CNPJ"
						valueCurrent={data?.cpfcnpj}
						autoCorrect={false}
						labelError="Digite CPF/CNPJ"
						autoCapitalize="none"
						keyboardType="number-pad"
						placeholder="CPF/CNPJ"
					/>

					<Input
						name="password"
						label="Nova Senha"
						labelError="Senha não atende critérios minimos"
						placeholder="Nova Senha - mínimo 6 caracteres"
						secureTextEntry
					/>

					<Input
						name="passwordConfirmation"
						label="Confirme a nova senha"
						labelError="Senha não confere com a nova senha"
						placeholder="Confirme a nova senha"
						secureTextEntry
						returnKeyType="send"
						onSubmitEditing={onPress}
					/>

					<View style={styles.viewButton}>
						<Button
							text={nameButton}
							onPress={() => formRef.current?.submitForm()}
						/>
					</View>
				</Form>
			</View>
		</ScrollView>
	);
}

CreateUser.propTypes = {
	button: PropTypes.string,
	onPress: PropTypes.func,
	onSubmit: PropTypes.func,
}.isRequired;
