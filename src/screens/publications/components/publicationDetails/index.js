import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';

import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from '../../../../lib/constants';
import styles from './styles';

function PublicationDetailsScreen({ data }) {
	const [isLike, setIsLike] = useState(false);

	const hangleIsLike = (status) => {
		if (status) {
			setIsLike(true);
			return;
		}
		setIsLike(false);
	};

	return (
		<View style={styles.container}>
			<View>
				{data?.id === 1 && (
					<Image source={data?.imagem} style={styles.image} />
				)}
			</View>
			<ScrollView>
				<View style={styles.description}>
					<Text style={styles.title}>{data?.titulo}</Text>
					<Text style={styles.subTitle}>{data?.texto_detalhado}</Text>
					<Text style={styles.date}>{data?.dt_pub_fim}</Text>
				</View>
			</ScrollView>

			<TouchableOpacity onPress={() => hangleIsLike(!isLike)}>
				<View style={styles.like}>
					<AntDesign
						name={isLike ? 'heart' : 'hearto'}
						size={30}
						color={Colors.primary}
					/>
				</View>
			</TouchableOpacity>
		</View>
	);
}

PublicationDetailsScreen.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.number,
		imagem: PropTypes.string,
		titulo: PropTypes.string,
		texto_detalhado: PropTypes.string,
		dt_pub_fim: PropTypes.string,
		like: PropTypes.bool,
		user: PropTypes.string,
	}).isRequired,
};

export default PublicationDetailsScreen;
