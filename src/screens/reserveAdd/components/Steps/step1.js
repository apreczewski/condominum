import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Feather } from '@expo/vector-icons';

import SearchInput from '../../../../components/SearchInput';
import Button from '../../../../components/Button';

import { Pallete, Strings, Colors } from '../../../../lib/constants';

import styles from './styles';

export default function Step1({
	ambients,
	select,
	onSelect,
	next,
	onSelectInfo,
}) {
	return (
		<View style={styles.view}>
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
								resizeMode="cover"
								style={styles.imgAmbient}
							/>
							<Text style={Pallete.h5Primary}>{item.title}</Text>
						</View>
						<TouchableOpacity
							onPress={() => {
								onSelectInfo(item);
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
			<View style={styles.viewButtons}>
				<Button
					text={Strings.continue}
					onPress={() => next(1)}
					disabled={!select}
				/>
			</View>
		</View>
	);
}

Step1.propTypes = {
	ambients: PropTypes.arrayOf(PropTypes.shape({})),
	select: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({})])
		.isRequired,
	onSelect: PropTypes.func.isRequired,
	next: PropTypes.func.isRequired,
	onSelectInfo: PropTypes.func.isRequired,
};

Step1.defaultProps = {
	ambients: [],
};
