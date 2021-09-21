import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';

import { Colors } from '../../lib/constants';
import * as Navigation from '../../lib/utils/navigation';
import publication from '../../assets/images/publication.png';
import styles from './styles';

function PublicationDetailsScreen({ route }) {
	const { item } = route.params;
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
				<TouchableOpacity
					style={styles.iconClose}
					onPress={() => Navigation.navigate('Publications')}>
					<AntDesign name="close" size={50} color={Colors.white} />
				</TouchableOpacity>
				{item?.id === '1' && (
					<Image source={publication} style={styles.image} />
				)}
			</View>

			<View style={styles.body}>
				<Text style={styles.h1}>{item?.title}</Text>
				<Text style={styles.h3}>{item?.subTitle}</Text>

				<View style={styles.containerBaseboard}>
					<View style={styles.imageContainerBaseboard}>
						<Image
							source={item.user}
							style={styles.baseboardImage}
						/>
					</View>

					<View style={styles.textContainerBaseboard}>
						<Text style={styles.baseboardText}>
							{item?.baseboard}
						</Text>
					</View>
				</View>
			</View>

			<TouchableOpacity onPress={() => hangleIsLike(!isLike)}>
				<View style={styles.containerLike}>
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
	route: PropTypes.shape({
		params: PropTypes.shape({
			item: PropTypes.shape({
				id: PropTypes.string,
				url: PropTypes.string,
				title: PropTypes.string,
				subTitle: PropTypes.string,
				seeMore: PropTypes.string,
				baseboard: PropTypes.string,
				like: PropTypes.string,
				user: PropTypes.string,
			}),
		}),
	}).isRequired,
};

export default PublicationDetailsScreen;
