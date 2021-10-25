import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';

import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { Colors } from '../../../../lib/constants';
import styles from './styles';

import { publicationsActions } from '../../../../store/actions';

function PublicationDetailsScreen({ data }) {
	const dispatch = useDispatch();

	const hangleIsLike = (id, status) => {
		dispatch(publicationsActions.putLike(id, status));
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

			<TouchableOpacity
				onPress={() => hangleIsLike(data.id, !data.status_curtida)}>
				<View style={styles.like}>
					<AntDesign
						name={data.status_curtida ? 'heart' : 'hearto'}
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
		status_curtida: PropTypes.bool,
		titulo: PropTypes.string,
		texto_detalhado: PropTypes.string,
		dt_pub_fim: PropTypes.string,
		like: PropTypes.bool,
		user: PropTypes.string,
	}).isRequired,
};

export default PublicationDetailsScreen;
