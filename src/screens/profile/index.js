import { View, Alert, ScrollView, Text } from 'react-native';
import React, { useRef, useCallback } from 'react';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form } from '@unform/mobile';

import Button from '../../components/Button';
import styles from './styles';
import Input from '../../components/Input';
import { Pallete, Strings } from '../../lib/constants';
import getValidationErrors from '../../lib/utils/getValidationErrors';

function ProfileScreen({ user }) {
	const formRef = useRef(null);

	/* const schema = Yup.object().shape({
		email: Yup.string()
			.required('E-mail obrigatório')
			.email('Digite um e-mail válido'),

		name: Yup.string().required('Nome obrigatório'),

		social_name: Yup.string().required('Nome social obrigatório'),

		fone: Yup.string()
			.min(8, 'Muito curto!')
			.max(15, 'Muito longo!')
			.required('Digite um telefone'),

		cpf: Yup.string().max(20, 'Muito longo!').required('Digite CPF/CNPJ'),
	}); */

	const handleSubmit = useCallback(async () => {
		// console.log('data', data);
		try {
			formRef.current?.setErrors({});

			/* await schema.validate(data, {
				abortEarly: false,
			}); */
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
				<View>
					<Text style={styles.text}>{Strings.createUserText}</Text>

					<Form ref={formRef} onSubmit={handleSubmit}>
						<Input
							name="email"
							label="E-mail"
							valueCurrent={user?.email}
							autoCorrect={false}
							labelError="Digite um e-mail válido!"
							autoCapitalize="none"
							keyboardType="email-address"
							placeholder="E-mail"
							clearErrors={handleErros}
							disabled={false}
						/>

						<Input
							name="name"
							label="Nome Completo"
							valueCurrent={user?.name}
							autoCorrect={false}
							labelError="Digite nome completo!"
							autoCapitalize="none"
							keyboardType="text"
							placeholder="Nome Completo"
							clearErrors={handleErros}
						/>

						<Input
							name="social_name"
							label="Nome Social"
							valueCurrent={user?.social_name}
							autoCorrect={false}
							labelError="Digite nome social!"
							autoCapitalize="none"
							keyboardType="text"
							placeholder="Nome com o qual deseja ser tratado"
							clearErrors={handleErros}
						/>

						<Input
							name="fone"
							label="Telefone"
							valueCurrent={user?.fone}
							autoCorrect={false}
							labelError="Digite um telefone"
							keyboardType="phone-pad"
							placeholder="(   ) ___________"
							clearErrors={handleErros}
						/>

						<Input
							name="cpf"
							label="CPF/CNPJ"
							valueCurrent={user?.cpf ? user?.cpf : user?.cnpj}
							autoCorrect={false}
							labelError="Digite CPF/CNPJ"
							autoCapitalize="none"
							keyboardType="number-pad"
							placeholder="CPF/CNPJ"
							clearErrors={handleErros}
						/>

						<View style={styles.viewButton}>
							<Button
								text={Strings.profile}
								onPress={() => formRef.current?.submitForm()}
							/>
						</View>
					</Form>
				</View>
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
