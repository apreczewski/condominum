import { View, Alert, ScrollView, Text } from 'react-native';
import React, { useRef, useCallback } from 'react';
import * as Yup from 'yup';
import { connect, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { Form } from '@unform/mobile';

import Button from '../../components/Button';
import styles from './styles';
import Input from '../../components/Input';
import { Pallete, Strings } from '../../lib/constants';
import getValidationErrors from '../../lib/utils/getValidationErrors';
import { authActions } from '../../store/actions';

function ProfileScreen({ user }) {
	const formRef = useRef(null);

	const dispatch = useDispatch();

	const handleSubmit = useCallback(async (data) => {
		try {
			dispatch(authActions.changeUser(data));
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
				<View>
					<Text style={styles.text}>{Strings.createUserText}</Text>

					<Form ref={formRef} onSubmit={handleSubmit}>
						<Input
							name="email"
							label="E-mail"
							valueCurrent={user?.email}
							value
							autoCorrect={false}
							autoCapitalize="none"
							keyboardType="email-address"
							placeholder="E-mail"
							disabled={false}
						/>

						<Input
							name="name"
							label="Nome Completo"
							valueCurrent={user?.name}
							autoCorrect={false}
							autoCapitalize="none"
							keyboardType="text"
							placeholder="Nome Completo"
						/>

						<Input
							name="social_name"
							label="Nome Social"
							valueCurrent={user?.social_name}
							value={user?.social_name}
							autoCorrect={false}
							autoCapitalize="none"
							keyboardType="text"
							placeholder="Nome com o qual deseja ser tratado"
						/>

						<Input
							name="fone"
							label="Telefone"
							valueCurrent={user?.fone}
							autoCorrect={false}
							keyboardType="phone-pad"
							placeholder="(   ) ___________"
						/>

						<Input
							name="cpf"
							label="CPF/CNPJ"
							valueCurrent={user?.cpf ? user?.cpf : user?.cnpj}
							autoCorrect={false}
							autoCapitalize="none"
							keyboardType="number-pad"
							placeholder="CPF/CNPJ"
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
