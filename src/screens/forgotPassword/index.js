import React, { useRef, useCallback } from 'react';
import * as Yup from 'yup';
import { View, Text, Image, Alert, ScrollView } from 'react-native';
import { Form } from '@unform/mobile';

import { Images, Pallete, Strings } from '../../lib/constants';
import styles from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../lib/utils/getValidationErrors';

export default function ForgotPasswordScreen() {
	const formRef = useRef(null);

	const handleSubmit = useCallback(async (data) => {
		try {
			formRef.current?.setErrors({});

			const schema = Yup.object().shape({
				email: Yup.string()
					.required('E-mail obrigatório')
					.email('Digite um e-mail válido'),
			});

			await schema.validate(data, {
				abortEarly: false,
			});
		} catch (err) {
			if (err instanceof Yup.ValidationError) {
				const errors = getValidationErrors(err);

				formRef.current?.setErrors(errors);

				return;
			}

			Alert.alert('Erro na autenticação');
		}
	}, []);

	return (
		<ScrollView vertical>
			<View style={Pallete.screen}>
				<Image style={styles.logo} source={Images.logo} />
				<Text style={styles.text}>{Strings.forgotPasswordText}</Text>

				<Form ref={formRef} onSubmit={handleSubmit}>
					<Input
						name="email"
						label="E-mail"
						autoCorrect={false}
						labelError="Digite um e-mail válido!"
						autoCapitalize="none"
						keyboardType="email-address"
						placeholder="E-mail"
						returnKeyType="send"
						onSubmitEditing={() => formRef.current?.submitForm()}
					/>
					<View style={styles.viewButton}>
						<Button
							text={Strings.recover}
							onPress={() => formRef.current?.submitForm()}
						/>
					</View>
				</Form>
			</View>
		</ScrollView>
	);
}
