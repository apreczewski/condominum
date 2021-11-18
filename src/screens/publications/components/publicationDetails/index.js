import React from 'react';
import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { connect, useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

import { Colors } from '../../../../lib/constants';
import styles from './styles';
import { publicationsActions } from '../../../../store/actions';

function PublicationDetailsScreen({ onGetItem, idCurrent, item, close }) {
	const dispatch = useDispatch();

	useFocusEffect(
		React.useCallback(() => {
			onGetItem(idCurrent);
		}, []),
	);

	// console.log('idCurrent>>', item);
	const hangleIsLike = (id, status) => {
		dispatch(publicationsActions.putLike(id, status));

		item.status_curtida = !item.status_curtida;
	};

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Pressable style={styles.close} onPress={close}>
					<AntDesign name="close" size={35} color={Colors.tertiary} />
				</Pressable>
				{item.imagem && (
					<Image
						source={{ uri: item?.imagem }}
						resizeMode="cover"
						style={styles.image}
					/>
				)}

				<ScrollView
					showsVerticalScrollIndicator={false}
					style={styles.maxSize}
					contentContainerStyle={styles.viewText}>
					<View style={styles.description}>
						<Text style={styles.title}>{item?.titulo}</Text>
						<Text style={styles.subTitle}>
							{item?.texto_detalhado}
						</Text>
						<Text style={styles.date}>{item?.dt_pub_fim}</Text>
					</View>
				</ScrollView>

				<TouchableOpacity
					onPress={() => hangleIsLike(item.id, item.status_curtida)}>
					<View style={styles.like}>
						<AntDesign
							name={item.status_curtida ? 'heart' : 'hearto'}
							size={30}
							color={Colors.primary}
						/>
						<Text style={styles.likeText}>Curtir</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}

PublicationDetailsScreen.propTypes = {
	onGetItem: PropTypes.func.isRequired,
	idCurrent: PropTypes.number.isRequired,
	close: PropTypes.func.isRequired,
	item: PropTypes.shape({
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

const mapStateToProps = (state) => ({
	loading: state.api.loading,
	item: state.publications.item,
});

const mapDispatchToProps = (dispatch) => ({
	onGetItem: (id) => dispatch(publicationsActions.getItem(id)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(PublicationDetailsScreen);
