import React, { useRef, useCallback } from 'react';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';

import {
	ScrollView,
	Text,
	Image,
	KeyboardAvoidingView,
	Platform,
	View,
	TouchableOpacity,
} from 'react-native';
import { Form } from '@unform/mobile';

import * as Navigation from '../../lib/utils/navigation';
import { Images, Strings, Pallete } from '../../lib/constants';
import styles from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../lib/utils/getValidationErrors';

import { authSelectors } from '../../store/selectors';
import { authActions } from '../../store/actions';

export default function AuthScreen() {
	const dispatch = useDispatch();
	const loading = useSelector(authSelectors.getLoading);
	const formRef = useRef(null);

	const handleSubmit = useCallback(async (data) => {
		try {
			formRef.current?.setErrors({});

			const schema = Yup.object().shape({
				username: Yup.string()
					.required('E-mail obrigatório')
					.email('Digite um e-mail válido'),
				password: Yup.string().required('Senha obrigatória'),
			});

			await schema.validate(data, {
				abortEarly: false,
			});

			dispatch(authActions.loginUserAction(data));
		} catch (err) {
			if (err instanceof Yup.ValidationError) {
				const errors = getValidationErrors(err);

				formRef.current?.setErrors(errors);
			}
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
							name="username"
							label="E-mail"
							autoCorrect={false}
							labelError="Digite um e-mail válido!"
							autoCapitalize="none"
							keyboardType="email-address"
							placeholder="E-mail"
						/>

						<Input
							name="password"
							label="Senha"
							placeholder="Senha"
							labelError="Senha incorreta!"
							secureTextEntry
							returnKeyType="send"
							onSubmitEditing={() =>
								formRef.current?.submitForm()
							}
						/>
						<View style={styles.viewButtonForm}>
							<Button
								text={Strings.enter}
								onPress={() => formRef.current?.submitForm()}
								loading={loading}
							/>
						</View>
					</Form>

					<View style={styles.viewButton}>
						<Button
							text={Strings.noAcont}
							onPress={() =>
								Navigation.navigate(
									/* 'UnlinkedAccount' */ 'RegisterUser',
								)
							}
						/>
					</View>

					<TouchableOpacity
						style={styles.labelNewPassword}
						onPress={() => Navigation.navigate('ForgotPassword')}>
						<Text style={styles.newPassword}>
							Esqueci minha senha
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}
