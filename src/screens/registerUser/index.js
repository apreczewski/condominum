import React, { useRef, useCallback, useState } from 'react';
import * as Yup from 'yup';
import { View, Alert, ScrollView, Text } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Form } from '@unform/mobile';

import ModalInfo from '../unlinkedAccount';
import { authActions } from '../../store/actions';
import { Pallete, Strings } from '../../lib/constants';
import getValidationErrors from '../../lib/utils/getValidationErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './styles';

function RegisterUserScreen({
	/* onRegister */ onSetError /* onSetSuccess */,
}) {
	const [email, setEmail] = useState('');

	const [modalInfo, setModalInfo] = useState(false);

	const handleModal = (status) =>
		status ? setModalInfo(true) : setModalInfo(false);

	const dispatch = useDispatch();

	const formRef = useRef(null);

	const schema = Yup.object().shape({
		email: Yup.string()
			.required('E-mail obrigatório')
			.email('Digite um e-mail válido'),
		name: Yup.string().required('Nome obrigatório'),
		password: Yup.string().min(6, 'No mínimo 6 dígitos'),
		passwordConfirmation: Yup.string().oneOf(
			[Yup.ref('password'), null],
			'As senhas devem corresponder',
		),
	});

	const handleSubmit = useCallback(async (data) => {
		try {
			onSetError('');

			await schema.validate(data, {
				abortEarly: false,
			});

			dispatch(
				authActions.registerUser({
					...data,
					pessoa_tipo: 'fisica',
				}),
			);

			handleModal(!modalInfo);
			setEmail(data.email);
		} catch (err) {
			if (err instanceof Yup.ValidationError) {
				const errors = getValidationErrors(err);
				onSetError(errors);
				formRef.current?.setErrors(errors);
				return;
			}

			Alert.alert('Erro na autenticação');
		}
	}, []);

	const handleErros = useCallback(() => {
		formRef.current?.setErrors([]);
	}, []);

	return (
		<ScrollView>
			<View style={Pallete.screen}>
				<Text style={styles.text}>{Strings.createUserText}</Text>

				<Form ref={formRef} onSubmit={handleSubmit}>
					<Input
						name="email"
						label="E-mail"
						autoCorrect={false}
						labelError="Digite um e-mail válido!"
						autoCapitalize="none"
						keyboardType="email-address"
						placeholder="E-mail"
						clearErrors={handleErros}
					/>

					<Input
						name="name"
						label="Nome Completo"
						autoCorrect={false}
						labelError="Digite nome completo!"
						autoCapitalize="none"
						keyboardType="text"
						placeholder="Nome Completo"
						clearErrors={handleErros}
					/>

					<Input
						name="nameSocial"
						label="Nome Social"
						autoCorrect={false}
						labelError="Digite nome social!"
						autoCapitalize="none"
						keyboardType="text"
						placeholder="Nome com o qual deseja ser tratado"
						clearErrors={handleErros}
					/>

					<Input
						name="phone"
						label="Telefone"
						autoCorrect={false}
						labelError="Digite um telefone"
						keyboardType="phone-pad"
						placeholder="(   ) ___________"
						clearErrors={handleErros}
					/>

					<Input
						name="cpfCnpj"
						label="CPF/CNPJ"
						autoCorrect={false}
						labelError="Digite CPF/CNPJ"
						autoCapitalize="none"
						keyboardType="number-pad"
						placeholder="CPF/CNPJ"
						clearErrors={handleErros}
					/>

					<Input
						name="password"
						label="Nova Senha"
						labelError="Senha não atende critérios minimos"
						placeholder="Nova Senha - mínimo 6 caracteres"
						passwordProps="password"
						clearErrors={handleErros}
					/>

					<Input
						name="passwordConfirmation"
						label="Confirme a nova senha"
						labelError="Senha não confere com a nova senha"
						placeholder="Confirme a nova senha"
						passwordProps="password"
						returnKeyType="send"
						onSubmitEditing={() => formRef.current?.submitForm()}
						clearErrors={handleErros}
					/>

					<View style={styles.viewButton}>
						<Button
							text="Criar Conta"
							onPress={() => formRef.current?.submitForm()}
						/>
					</View>
				</Form>
				<ModalInfo
					visible={modalInfo}
					close={() => handleModal(!modalInfo)}
					email={email}
				/>
			</View>
		</ScrollView>
	);
}

RegisterUserScreen.propTypes = {
	onSetError: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	error: state.auth.error,
	success: state.auth.success,
});

const mapDispatchToProps = (dispatch) => ({
	onRegister: (user) => dispatch(authActions.registerUser(user)),
	onSetError: () => dispatch(authActions.setError('')),
	onSetSuccess: () => dispatch(authActions.setSuccess('')),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUserScreen);
