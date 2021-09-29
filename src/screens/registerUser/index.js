import React, { useRef, useCallback } from 'react';
import * as Yup from 'yup';
import { View, Text, Alert, ScrollView } from 'react-native';
import { Form } from '@unform/mobile';

import * as Navigation from '../../lib/utils/navigation';
import { Pallete, Strings } from '../../lib/constants';
import styles from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../lib/utils/getValidationErrors';

export default function RegisterUserScreen() {
	const formRef = useRef(null);

	const schema = Yup.object().shape({
		email: Yup.string()
			.required('E-mail obrigatório')
			.email('Digite um e-mail válido'),

		name: Yup.string().required('Nome obrigatório'),

		nameSocial: Yup.string().required('Nome social obrigatório'),

		phone: Yup.string()
			.min(8, 'Muito curto!')
			.max(14, 'Muito longo!')
			.required('Digite um telefone'),

		cpfCnpj: Yup.string()
			.max(20, 'Muito longo!')
			.required('Digite CPF/CNPJ'),

		password: Yup.string().min(6, 'No mínimo 6 dígitos'),
		passwordConfirmation: Yup.string().oneOf(
			[Yup.ref('password'), null],
			'As senhas devem corresponder',
		),
	});

	const handleSubmit = useCallback(async (data) => {
		//	console.log(data);
		try {
			formRef.current?.setErrors({});

			await schema.validate(data, {
				abortEarly: false,
			});
		} catch (err) {
			if (err instanceof Yup.ValidationError) {
				const errors = getValidationErrors(err);

				formRef.current?.setErrors(errors);

				// console.log(errors);

				return;
			}

			Alert.alert('Erro na autenticação');
		}
	}, []);

	return (
		<ScrollView>
			<View style={Pallete.screen}>
				<Text style={styles.text}>
					Informe seus dados para criarmos sua conta no app! Alguns
					dados são obrigatórios para que ocorra a identificação dos
					seus condomínios.
				</Text>

				<Form ref={formRef} onSubmit={handleSubmit}>
					<Input
						name="email"
						label="E-mail"
						autoCorrect={false}
						labelError="Digite um e-mail válido!"
						autoCapitalize="none"
						keyboardType="email-address"
						placeholder="E-mail"
					/>

					<Input
						name="name"
						label="Nome Completo"
						autoCorrect={false}
						labelError="Digite nome completo!"
						autoCapitalize="none"
						placeholder="Nome Completo"
					/>

					<Input
						name="nameSocial"
						label="Nome Social"
						autoCorrect={false}
						labelError="Digite nome social!"
						autoCapitalize="none"
						keyboardType=""
						placeholder="Nome com o qual deseja ser tratado"
					/>

					<Input
						name="phone"
						label="Telefone"
						autoCorrect={false}
						labelError="Digite um telefone"
						keyboardType="phone-pad"
						placeholder="(   ) ___________"
					/>

					<Input
						name="cpfCnpj"
						label="CPF/CNPJ"
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
						secureTextEntry
						placeholder="Confirme a nova senha"
						returnKeyType="send"
						onSubmitEditing={() => formRef.current?.submitForm()}
					/>

					<View style={styles.viewButton}>
						<Button
							text={Strings.createAcont}
							onPress={
								() => Navigation.navigate('UnlinkedAccount')
								// formRef.current?.submitForm()
							}
						/>
					</View>
				</Form>
			</View>
		</ScrollView>
	);
}
