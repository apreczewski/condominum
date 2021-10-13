import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { connect, useDispatch } from 'react-redux';
import { authActions } from '../../store/actions';
import Colors from '../../lib/constants/colors';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: Colors.white,
		flex: 1,
		justifyContent: 'center',
	},
});

const AuthLoading = () => {
	const dispatch = useDispatch();
	useFocusEffect(
		React.useCallback(() => {
			const bootstrapAsync = async () => {
				dispatch(authActions.checkUser());
			};

			bootstrapAsync();
		}, []),
	);

	return (
		<View style={styles.container}>
			<ActivityIndicator color={Colors.primary} />
		</View>
	);
};

export default connect(null, { authActions })(AuthLoading);
