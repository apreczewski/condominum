import React, { useState } from 'react';
import { FlatList, Text, View, RefreshControl } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';

import Button from '../../components/Button';
import RadioButton from '../../components/RadioButton';
import { Pallete, Strings } from '../../lib/constants';
import styles from './styles';
import { condominiumActions } from '../../store/actions';

function CondominiumScreen({ onGet, loading, list }) {
	useFocusEffect(
		React.useCallback(() => {
			onGet();
		}, []),
	);

	const [condominiumCurrent, setCondominiumCurrent] = useState(null);

	const handleSelectCondominium = (data) => {
		setCondominiumCurrent(data);
	};

	const dispatch = useDispatch();

	const handleid = (id) => {
		dispatch(condominiumActions.putItem(id));
	};
	return (
		<ScrollView
			vertical
			refreshControl={<RefreshControl refreshing={loading} />}>
			<View style={Pallete.screen}>
				<View style={styles.container}>
					<View style={styles.row1}>
						<Text style={styles.title}>
							{Strings.currentCondominiumSelected}
						</Text>
					</View>
					<View style={styles.row2}>
						<Text style={styles.subTitle}>
							{condominiumCurrent?.condominio_nome}
						</Text>
					</View>
				</View>

				{list && (
					<>
						<FlatList
							data={list}
							keyExtractor={(item) => item?.id.toString()}
							renderItem={({ item }) => (
								<View style={styles.cardAmbient}>
									<RadioButton
										label={item?.condominio_nome}
										onPress={() =>
											handleSelectCondominium(item)
										}
										select={
											condominiumCurrent?.id === item?.id
										}
									/>
								</View>
							)}
						/>
						<View style={styles.viewButtons}>
							<Button
								text={Strings.condominiumExchange}
								onPress={() => handleid(condominiumCurrent?.id)}
								disabled={!condominiumCurrent?.id}
							/>
						</View>
					</>
				)}
			</View>
		</ScrollView>
	);
}

CondominiumScreen.propTypes = {
	onGet: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	list: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			condominio_nome: PropTypes.string,
		}),
	).isRequired,
};

const mapStateToProps = (state) => ({
	loading: state.api.loading,
	list: state.condominium.list,
});

const mapDispatchToProps = (dispatch) => ({
	onGet: () => dispatch(condominiumActions.getList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CondominiumScreen);
