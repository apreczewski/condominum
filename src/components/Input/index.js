/* eslint-disable no-return-assign */
import React, {
	useState,
	forwardRef,
	useImperativeHandle,
	useEffect,
	useRef,
} from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { TextInputMask } from 'react-native-masked-text';

import { Feather } from '@expo/vector-icons';

import styles from './styles';
import { Colors } from '../../lib/constants';

const Input = forwardRef(
	(
		{
			label,
			type,
			optionsMask,
			mask,
			error,
			value,
			maxLength,
			placeholder,
			onBlur,
			blurOnSubmit,
			styleContainer,
			autoCorrect,
			multiline,
			autoCapitalize,
			onSubmitEditing,
			editable,
			onChangeText,
			styleLabel,
			required,
			rightIcon,
			leftIcon,
			returnKeyType,
			placeholderTextColor,
			stylesInput,
			onPressClean,
			iconColor,
			stylesInputContainer,
			heightMultiline,
			borderColorFocus,
			onValid,
			disabledColor,
			containerLabel,
			onFocusInput,
			success,
			countShow,
		},
		ref,
	) => {
		const [onFocus, setOnFocus] = useState(false);
		const [keyboardType, setKeyboard] = useState('default');
		let inputRef = useRef();
		const [secureText, setSecureText] = useState(false);
		const [count, setCount] = useState(0);

		useImperativeHandle(ref, () => ({
			focus: () => {
				inputRef.current.focus();
			},
		}));

		const getKeyboardType = (v) => {
			switch (v) {
				case 'number':
					setKeyboard('numeric');
					break;
				default:
					setKeyboard('default');
					break;
			}
		};

		function renderPasswordIcon() {
			if (type !== 'password') return null;
			return (
				<TouchableOpacity
					style={styles.containerIcon}
					onPress={() => setSecureText(!secureText)}>
					<Feather
						name={secureText ? 'eye-off' : 'eye'}
						color={iconColor}
						size={20}
					/>
				</TouchableOpacity>
			);
		}

		function renderBtnError() {
			if (!error) return null;
			return (
				<TouchableOpacity
					onPress={onPressClean}
					style={[
						styles.containerIcon,
						multiline && styles.paddingTop,
					]}>
					<Feather name="x-circle" color={Colors.error} size={20} />
				</TouchableOpacity>
			);
		}

		function renderSuccess() {
			if (!success) return null;
			return (
				<View
					onPress={onPressClean}
					style={[
						styles.containerIcon,
						multiline && styles.paddingTop,
					]}>
					<Feather
						name="checkCircle-circle"
						color={Colors.green}
						size={20}
					/>
				</View>
			);
		}

		useEffect(() => {
			getKeyboardType(type);
		}, [type]);

		useEffect(() => {
			if (value) {
				setCount(value.length);
			}
		}, [value]);

		return (
			<View style={[styles.container, styleContainer]}>
				{label ? (
					<View style={[styles.containerLabel, containerLabel]}>
						<Text style={[styles.label, styleLabel]}>{label}</Text>
						{required ? (
							<Text style={styles.required}> *</Text>
						) : null}
					</View>
				) : (
					<>
						{required ? (
							<View style={styles.requiredAbsolute}>
								<Text style={styles.required}>*</Text>
							</View>
						) : null}
					</>
				)}
				<View
					style={[
						styles.inputContainer,
						stylesInputContainer,
						multiline && styles.alignTop,
						onFocus && { borderColor: borderColorFocus },
						error && styles.inputError,
						!editable && { backgroundColor: disabledColor },
					]}>
					{leftIcon}
					{mask ? (
						<TextInputMask
							type={mask}
							ref={(r) => (inputRef = r)}
							editable={editable}
							options={optionsMask}
							style={[styles.input, stylesInput]}
							onChangeText={(maskedText) =>
								onChangeText(maskedText)
							}
							value={value}
							placeholder={placeholder}
							placeholderTextColor={placeholderTextColor}
							onSubmitEditing={onSubmitEditing}
							blurOnSubmit={blurOnSubmit}
							focus={onFocus}
							onFocus={() => {
								setOnFocus(true);
								onFocusInput();
							}}
							secureTextEntry={secureText}
							onBlur={() => {
								const valid = inputRef.isValid();
								onValid(valid);
								setOnFocus(false);
								onBlur();
							}}
						/>
					) : (
						<TextInput
							style={[
								styles.input,
								stylesInput,
								multiline && { height: heightMultiline },
							]}
							onChangeText={(text) => onChangeText(text)}
							value={value}
							ref={inputRef}
							multiline={multiline}
							editable={editable}
							returnKeyType={returnKeyType}
							placeholder={placeholder}
							onSubmitEditing={onSubmitEditing}
							placeholderTextColor={placeholderTextColor}
							blurOnSubmit={blurOnSubmit}
							secureTextEntry={secureText}
							maxLength={maxLength}
							autoCapitalize={autoCapitalize}
							autoCorrect={autoCorrect}
							focus={onFocus}
							onFocus={() => {
								setOnFocus(true);
								onFocusInput();
							}}
							setSecureText={secureText}
							keyboardType={keyboardType}
							onBlur={() => {
								setOnFocus(false);
								onBlur();
							}}
							textAlignVertical={multiline ? 'top' : 'center'}
						/>
					)}
					{renderBtnError()}
					{renderSuccess()}
					{rightIcon}
					{renderPasswordIcon()}
				</View>
				<View style={styles.row}>
					<View style={styles.flexBig}>
						{error ? (
							<Text style={styles.error}>{error}</Text>
						) : null}
					</View>
					{multiline && countShow ? (
						<View style={styles.flexSmall}>
							<Text
								right
								style={
									styles.countText
								}>{`${count}/${maxLength}`}</Text>
						</View>
					) : null}
				</View>
			</View>
		);
	},
);

Input.propTypes = {
	label: PropTypes.string,
	type: PropTypes.string,
	optionsMask: PropTypes.shape({}),
	mask: PropTypes.string,
	error: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	maxLength: PropTypes.number,
	placeholder: PropTypes.string,
	onBlur: PropTypes.func,
	blurOnSubmit: PropTypes.bool,
	styleContainer: PropTypes.shape({}),
	autoCorrect: PropTypes.bool,
	multiline: PropTypes.bool,
	autoCapitalize: PropTypes.string,
	onSubmitEditing: PropTypes.func,
	editable: PropTypes.bool,
	onChangeText: PropTypes.func,
	styleLabel: PropTypes.shape({}),
	required: PropTypes.bool,
	rightIcon: PropTypes.element,
	leftIcon: PropTypes.element,
	placeholderTextColor: PropTypes.string,
	stylesInput: PropTypes.shape({}),
	onPressClean: PropTypes.func,
	returnKeyType: PropTypes.string,
	iconColor: PropTypes.string,
	stylesInputContainer: PropTypes.shape({}),
	heightMultiline: PropTypes.number,
	borderColorFocus: PropTypes.string,
	onValid: PropTypes.func,
	disabledColor: PropTypes.string,
	containerLabel: PropTypes.shape({}),
	onFocusInput: PropTypes.func,
	success: PropTypes.bool,
	countShow: PropTypes.bool,
};

Input.defaultProps = {
	label: null,
	type: 'text',
	optionsMask: {},
	mask: null,
	error: null,
	maxLength: 200,
	placeholder: '',
	onBlur: () => {},
	blurOnSubmit: false,
	styleContainer: {},
	autoCorrect: false,
	multiline: false,
	autoCapitalize: 'none',
	onSubmitEditing: () => {},
	editable: true,
	onChangeText: () => {},
	onValid: () => {},
	styleLabel: {},
	required: false,
	rightIcon: null,
	leftIcon: null,
	placeholderTextColor: '#ADABAC',
	stylesInput: {},
	onPressClean: () => {},
	returnKeyType: 'done',
	iconColor: '#CCC',
	stylesInputContainer: {},
	heightMultiline: 110,
	borderColorFocus: Colors.primary,
	disabledColor: '#E7E7E7',
	containerLabel: {},
	onFocusInput: () => {},
	success: false,
	countShow: false,
};

export default Input;
