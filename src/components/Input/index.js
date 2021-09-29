/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useField } from '@unform/core';
import { EvilIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from './styles';
import { Colors } from '../../lib/constants';

function Input({ name, label, labelError, ...rest }) {
	const inputElementRef = useRef(null);

	const {
		fieldName,
		registerField,
		defaultValue = '',
		error,
	} = useField(name);

	const inputValueRef = useRef({ value: defaultValue });

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputValueRef.current,
			path: 'value',
			setValue(ref, value) {
				inputValueRef.current.value = value;
				inputElementRef.current.setNativeProps({ text: value });
			},
			clearValue() {
				inputValueRef.current.value = '';
				inputElementRef.current.clear();
			},
		});
	}, [fieldName, registerField]);

	return (
		<>
			{label && <Text style={styles.label}>{label}</Text>}

			<View style={styles.container}>
				<TextInput
					style={styles.input}
					defaultValue={defaultValue}
					ref={inputElementRef}
					onChangeText={(value) => {
						inputValueRef.current.value = value;
					}}
					{...rest}
				/>

				{!!error && (
					<EvilIcons
						name={!error ? 'check' : 'close-o'}
						size={30}
						color={!error ? Colors.green_400 : Colors.primary_400}
					/>
				)}
			</View>
			{!!error && <Text style={styles.labelError}>{labelError}</Text>}
		</>
	);
}

export default Input;

Input.propTypes = {
	name: PropTypes.string,
	label: PropTypes.string,
	labelError: PropTypes.string,
};

Input.defaultProps = {
	name: '',
	label: '',
	labelError: '',
};
