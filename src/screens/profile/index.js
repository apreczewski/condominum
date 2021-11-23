import { View, Alert, ScrollView } from 'react-native';
import React, { useRef, useCallback } from 'react';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CreateUser from '../../components/CreateUser';
import { Pallete, Strings } from '../../lib/constants';
import getValidationErrors from '../../lib/utils/getValidationErrors';

function ProfileScreen({ user }) {
	const formRef = useRef(null);

	const schema = Yup.object().shape({
		email: Yup.string()
			.required('E-mail obrigatório')
			.email('Digite um e-mail válido'),

		name: Yup.string().required('Nome obrigatório'),

		/* nameSocial: Yup.string().required('Nome social obrigatório'),

		phone: Yup.string()
			.min(8, 'Muito curto!')
			.max(14, 'Muito longo!')
			.required('Digite um telefone'),

		cpfCnpj: Yup.string()
			.max(20, 'Muito longo!')
	.required('Digite CPF/CNPJ'), */

		password: Yup.string().min(6, 'No mínimo 6 dígitos'),
		passwordConfirmation: Yup.string().oneOf(
			[Yup.ref('password'), null],
			'As senhas devem corresponder',
		),
	});

	const handleSubmit = useCallback(async (data) => {
		// console.log('data', data);
		try {
			formRef.current?.setErrors({});

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

	const handleErros = useCallback(() => {
		formRef.current?.setErrors([]);
	}, []);

	return (
		<ScrollView vertical>
			<View style={Pallete.screen}>
				<CreateUser
					formRef={formRef}
					nameButton={Strings.profile}
					onSubmit={handleSubmit}
					onPress={() => formRef.current?.submitForm()}
					data={{
						email: user.email,
						name: user.name,
						nameSocial: user.social_name,
						phone: user.fone,
						cpfcnpj: user.cpf ? user.cpf : user.cnpj,
					}}
					clearErrors={handleErros}
				/>
			</View>
		</ScrollView>
	);
}

ProfileScreen.propTypes = {
	user: PropTypes.shape({
		social_name: PropTypes.string,
		email: PropTypes.string,
		name: PropTypes.string,
		fone: PropTypes.string,
		condominio_id: PropTypes.number,
		condominio_nome: PropTypes.string,
		cnpj: PropTypes.string,
		cpf: PropTypes.string,
	}).isRequired,
};

const mapStateToProps = (state) => ({
	loading: state.api.loading,
	user: state.auth.user,
});

export default connect(mapStateToProps)(ProfileScreen);
