import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import { Colors } from '../../lib/constants';

import styles from './styles';

export default function SearchInput({ placeholder, onSearch, value }) {
	const [text, setText] = useState(value);
	return (
		<View style={styles.containerInput}>
			<TextInput
				value={text}
				style={styles.input}
				onChangeText={setText}
				placeholder={placeholder}
				onSubmitEditing={() => onSearch(text)}
				returnKeyType="search"
			/>
			<TouchableOpacity
				onPress={() => onSearch(text)}
				disabled={text === ''}>
				<Feather name="search" color={Colors.primary} size={20} />
			</TouchableOpacity>
		</View>
	);
}

SearchInput.propTypes = {
	onSearch: PropTypes.func,
	placeholder: PropTypes.string,
	value: PropTypes.string,
};

SearchInput.defaultProps = {
	onSearch: () => {},
	placeholder: 'Pesquisar...',
	value: '',
};
