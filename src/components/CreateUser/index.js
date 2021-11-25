import React from 'react';
import { View, Text } from 'react-native';
import { Form } from '@unform/mobile';
import PropTypes from 'prop-types';
import { Strings } from '../../lib/constants';
import Button from '../Button';

import styles from './styles';
import Input from '../Input';

export default function CreateUser({
	formRef,
	nameButton,
	onSubmit,
	data,
	clearErrors,
}) {
	return (
		<View>
			<Text style={styles.text}>{Strings.createUserText}</Text>

			<Form ref={formRef} onSubmit={onSubmit}>
				<Input
					name="email"
					label="E-mail"
					valueCurrent={data?.email}
					autoCorrect={false}
					labelError="Digite um e-mail válido!"
					autoCapitalize="none"
					keyboardType="email-address"
					placeholder="E-mail"
					clearErrors={clearErrors}
					disabled={false}
				/>

				<Input
					name="name"
					label="Nome Completo"
					valueCurrent={data?.name}
					autoCorrect={false}
					labelError="Digite nome completo!"
					autoCapitalize="none"
					keyboardType="text"
					placeholder="Nome Completo"
					clearErrors={clearErrors}
				/>

				<Input
					name="nameSocial"
					label="Nome Social"
					valueCurrent={data?.nameSocial}
					autoCorrect={false}
					labelError="Digite nome social!"
					autoCapitalize="none"
					keyboardType="text"
					placeholder="Nome com o qual deseja ser tratado"
					clearErrors={clearErrors}
				/>

				<Input
					name="phone"
					label="Telefone"
					valueCurrent={data?.phone}
					autoCorrect={false}
					labelError="Digite um telefone"
					keyboardType="phone-pad"
					placeholder="(   ) ___________"
					clearErrors={clearErrors}
				/>

				<Input
					name="cpfCnpj"
					label="CPF/CNPJ"
					valueCurrent={data?.cpfcnpj}
					autoCorrect={false}
					labelError="Digite CPF/CNPJ"
					autoCapitalize="none"
					keyboardType="number-pad"
					placeholder="CPF/CNPJ"
					clearErrors={clearErrors}
				/>

				<View style={styles.viewButton}>
					<Button
						text={nameButton}
						onPress={() => formRef.current?.submitForm()}
					/>
				</View>
			</Form>
		</View>
	);
}

CreateUser.propTypes = {
	formRef: PropTypes.shape({
		current: PropTypes.instanceOf(),
	}).isRequired,
	nameButton: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
	data: PropTypes.shape({
		email: PropTypes.string,
		name: PropTypes.string,
		nameSocial: PropTypes.string,
		phone: PropTypes.string,
		cpfcnpj: PropTypes.string,
	}),
	clearErrors: PropTypes.func,
};

CreateUser.defaultProps = {
	data: PropTypes.shape({
		email: '',
		name: '',
		nameSocial: '',
		phone: '',
		cpfcnpj: '',
	}),
	clearErrors: () => {},
};
