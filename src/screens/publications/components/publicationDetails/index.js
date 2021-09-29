import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';

import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from '../../../../lib/constants';
import publication from '../../../../assets/images/publication.png';
import styles from './styles';

function PublicationDetailsScreen({ data = {} }) {
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
				{data?.id === '1' && (
					<Image source={publication} style={styles.image} />
				)}
			</View>
			<ScrollView>
				<View style={styles.description}>
					<Text style={styles.title}>{data?.title}</Text>
					<Text style={styles.subTitle}>{data?.subTitle}</Text>
					<Text style={styles.date}>{data?.baseboard}</Text>
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
		id: PropTypes.string,
		url: PropTypes.string,
		title: PropTypes.string,
		subTitle: PropTypes.string,
		seeMore: PropTypes.string,
		baseboard: PropTypes.string,
		like: PropTypes.bool,
		user: PropTypes.string,
	}).isRequired,
};

export default PublicationDetailsScreen;
