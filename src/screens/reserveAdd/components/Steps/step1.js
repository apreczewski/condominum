import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Feather } from '@expo/vector-icons';

import ModalInfo from '../ModalInfoAmbient';

import SearchInput from '../../../../components/SearchInput';

import { Pallete, Strings, Colors } from '../../../../lib/constants';

import styles from './styles';

export default function Step1({ ambients, select, onSelect }) {
	const [modalInfo, setModalInfo] = useState(false);
	const [itemModal, setItemModal] = useState({});

	return (
		<View>
			<View style={styles.viewHeader}>
				<Text style={Pallete.h1}>{Strings.reserveAdd}</Text>
				<Text style={Pallete.paragraph}>
					{Strings.selectReserveAmbient}
				</Text>
			</View>
			<SearchInput />
			<FlatList
				style={styles.listAmbient}
				data={ambients}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={[
							styles.cardAmbient,
							{
								borderColor:
									select && select.id === item.id
										? Colors.primary
										: Colors.white,
							},
						]}
						onPress={() => onSelect(item)}>
						<View style={styles.row}>
							<Image
								source={{ uri: item.image }}
								resizeMode="contain"
								style={styles.imgAmbient}
							/>
							<Text style={Pallete.h5Primary}>{item.title}</Text>
						</View>
						<TouchableOpacity
							onPress={() => {
								setItemModal(item);
								setModalInfo(true);
							}}>
							<Feather
								name="info"
								size={24}
								color={Colors.primary}
							/>
						</TouchableOpacity>
					</TouchableOpacity>
				)}
			/>
			<ModalInfo
				visible={modalInfo}
				close={() => setModalInfo(false)}
				item={itemModal}
			/>
		</View>
	);
}

Step1.propTypes = {
	ambients: PropTypes.arrayOf(PropTypes.shape({})),
	select: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({})])
		.isRequired,
	onSelect: PropTypes.func.isRequired,
};

Step1.defaultProps = {
	ambients: [],
};
