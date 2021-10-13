import React, { useRef, useCallback } from 'react';
import * as Yup from 'yup';
import { View, Alert, ScrollView } from 'react-native';

import CreateUser from '../../components/CreateUser';
import { Pallete, Strings } from '../../lib/constants';
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
		<ScrollView vertical>
			<View style={Pallete.screen}>
				<CreateUser
					formRef={formRef}
					nameButton={Strings.createAcont}
					onSubmit={handleSubmit}
					onPress={() => formRef.current?.submitForm()}
				/>
			</View>
		</ScrollView>
	);
}
