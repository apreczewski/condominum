import React, { useRef, useCallback } from 'react';
import * as Yup from 'yup';
import { View, Alert, ScrollView } from 'react-native';

// import { useDispatch } from 'react-redux';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { authActions } from '../../store/actions';
import CreateUser from '../../components/CreateUser';
import { Pallete, Strings } from '../../lib/constants';
import getValidationErrors from '../../lib/utils/getValidationErrors';

function RegisterUserScreen({
	/* onRegister */ onSetError /* onSetSuccess */,
}) {
	const dispatch = useDispatch();
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
		// console.log('test >>> ', data);

		try {
			onSetError('');

			await schema.validate(data, {
				abortEarly: false,
			});

			// console.log('test > ', data);

			dispatch(
				authActions.registerUser({
					email: 'tes88@gmail.com',
					name: 'alex',
					nameSocial: 'alex 88',
					passwordConfirmation: 'alex1234',
					cpfCnpj: '80482902000',
					phone: '51985860599',
					password: 'alex1234',
					pessoa_tipo: 'fisica',
				}),
			);
		} catch (err) {
			if (err instanceof Yup.ValidationError) {
				const errors = getValidationErrors(err);
				onSetError(errors);
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
					data={{}}
				/>
			</View>
		</ScrollView>
	);
}

RegisterUserScreen.propTypes = {
	// onRegister: PropTypes.func.isRequired,
	onSetError: PropTypes.func.isRequired,
	// onSetSuccess: PropTypes.func.isRequired,
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
