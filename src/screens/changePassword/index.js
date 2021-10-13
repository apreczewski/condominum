import React, { useRef, useCallback } from 'react';
import * as Yup from 'yup';
import {
	ScrollView,
	Image,
	KeyboardAvoidingView,
	Platform,
	View,
	Alert,
} from 'react-native';
import { Form } from '@unform/mobile';

import { Images, Strings, Pallete } from '../../lib/constants';
import styles from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../lib/utils/getValidationErrors';

export default function ChangePasswordScreen() {
	const formRef = useRef(null);

	const handleSubmit = useCallback(async (data) => {
		try {
			formRef.current?.setErrors({});

			const schema = Yup.object().shape({
				password: Yup.string().min(6, 'No mínimo 6 dígitos'),
				passwordConfirmation: Yup.string().oneOf(
					[Yup.ref('password'), null],
					'As senhas devem corresponder',
				),
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
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : null}>
			<ScrollView vertical>
				<View style={Pallete.screen}>
					<Image style={styles.logo} source={Images.logo} />

					<Form ref={formRef} onSubmit={handleSubmit}>
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
							onSubmitEditing={() =>
								formRef.current?.submitForm()
							}
						/>
						<View style={styles.viewButton}>
							<Button
								text={Strings.changePassword}
								onPress={() => formRef.current?.submitForm()}
							/>
						</View>
					</Form>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}
