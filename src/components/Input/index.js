/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useField } from '@unform/core';
import { EvilIcons, MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from './styles';
import { Colors } from '../../lib/constants';

function Input({
	name,
	valueCurrent,
	label,
	labelError,
	passwordProps,
	...rest
}) {
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

	const [hidePass, setHidePass] = useState(true);

	return (
		<>
			{label && <Text style={styles.label}>{label}</Text>}

			<View style={styles.container}>
				<TextInput
					style={styles.input}
					defaultValue={valueCurrent || defaultValue}
					ref={inputElementRef}
					onChangeText={(value) => {
						inputValueRef.current.value = value;
					}}
					secureTextEntry={passwordProps === 'password' && hidePass}
					{...rest}
				/>

				{passwordProps === 'password' && (
					<TouchableOpacity onPress={() => setHidePass(!hidePass)}>
						<MaterialIcons
							name={
								hidePass === true
									? 'visibility'
									: 'visibility-off'
							}
							size={30}
							color={Colors.secondary}
						/>
					</TouchableOpacity>
				)}

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
	valueCurrent: PropTypes.string,
	passwordProps: PropTypes.string,
};

Input.defaultProps = {
	name: '',
	label: '',
	labelError: '',
	valueCurrent: '',
	passwordProps: '',
};
