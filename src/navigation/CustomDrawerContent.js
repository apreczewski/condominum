/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
	DrawerContentScrollView,
	DrawerItemList,
} from '@react-navigation/drawer';

import { useDispatch, useSelector } from 'react-redux';

import { Images, Colors } from '../lib/constants';

import { authSelectors } from '../store/selectors';
import { authActions } from '../store/actions';

const styles = StyleSheet.create({
	condoTxt: {
		color: Colors.tertiary,
		fontFamily: 'Roboto-Regular',
		fontSize: 15,
	},
	footer: {
		alignItems: 'center',
		backgroundColor: Colors.white,
		elevation: 3,
		flexDirection: 'row',
		justifyContent: 'center',
		paddingBottom: 20,
		paddingVertical: 15,
		shadowColor: Colors.black,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
	},
	header: {
		alignItems: 'center',
		marginTop: 50,
	},
	logoutTxt: {
		color: Colors.tertiary,
		fontFamily: 'Roboto-Bold',
		fontSize: 18,
		marginLeft: 5,
	},
	menu: {
		backgroundColor: Colors.drawerBackground,
		flex: 1,
	},
	sideMenuProfileIcon: {
		alignSelf: 'center',
		height: 80,
		resizeMode: 'contain',
		width: 80,
	},
	userTxt: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 25,
		marginTop: 5,
	},
});

const CustomDrawerContent = (props) => {
	const dispatch = useDispatch();
	const user = useSelector(authSelectors.getUser);

	return (
		<View style={styles.menu}>
			<View style={styles.header}>
				<Image
					source={Images.user}
					style={styles.sideMenuProfileIcon}
				/>
				<Text style={styles.userTxt}>{user?.name}</Text>
				<Text style={styles.condoTxt}>
					Condomínio Vila Real - Apto 402
				</Text>
			</View>
			<DrawerContentScrollView
				{...props}
				showsVerticalScrollIndicator={false}>
				<DrawerItemList {...props} />
			</DrawerContentScrollView>
			<TouchableOpacity
				style={styles.footer}
				onPress={() => dispatch(authActions.logout())}>
				<MaterialCommunityIcons
					name="logout-variant"
					size={24}
					color={Colors.tertiary}
				/>
				<Text style={styles.logoutTxt}>Sair</Text>
			</TouchableOpacity>
		</View>
	);
};
export default CustomDrawerContent;
