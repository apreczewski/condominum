/* eslint-disable react/prop-types */
import React from 'react';
import { Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from '../lib/utils/navigation';

import MainDrawerNavigator from './DrawerNavigator';
import TicketDetailsScreen from '../screens/ticketDetails';
import BalanceDetailsScreen from '../screens/balanceDetails';
import ReserveAddScreen from '../screens/reserveAdd';

import { Colors, Images } from '../lib/constants';

const Stack = createStackNavigator();

function MainStackNavigator() {
	return (
		<NavigationContainer ref={navigationRef}>
			<Stack.Navigator
				screenOptions={{
					gestureEnabled: true,
					headerStyle: {
						elevation: 0,
						borderBottomWidth: 1,
					},
					headerBackTitleVisible: false,
				}}>
				<>
					<Stack.Screen
						name="Main"
						component={MainDrawerNavigator}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name="TicketDetails"
						component={TicketDetailsScreen}
						options={({ navigation }) => ({
							headerTitle: () => (
								<Image source={Images.logoSmall} />
							),
							headerTitleAlign: 'center',
							headerLeft: () => (
								<Entypo
									name="chevron-thin-left"
									size={24}
									color={Colors.secondary}
									onPress={() => navigation.goBack()}
								/>
							),
							headerLeftContainerStyle: { marginLeft: 5 },
						})}
					/>
					<Stack.Screen
						name="BalanceDetails"
						component={BalanceDetailsScreen}
						options={({ navigation }) => ({
							headerTitle: () => (
								<Image source={Images.logoSmall} />
							),
							headerTitleAlign: 'center',
							headerLeft: () => (
								<Entypo
									name="chevron-thin-left"
									size={24}
									color={Colors.secondary}
									onPress={() => navigation.goBack()}
								/>
							),
							headerLeftContainerStyle: { marginLeft: 5 },
						})}
					/>
					<Stack.Screen
						name="ReserveAdd"
						component={ReserveAddScreen}
						options={({ navigation }) => ({
							headerTitle: () => (
								<Image source={Images.logoSmall} />
							),
							headerTitleAlign: 'center',
							headerLeft: () => (
								<Entypo
									name="chevron-thin-left"
									size={24}
									color={Colors.secondary}
									onPress={() => navigation.goBack()}
								/>
							),
							headerLeftContainerStyle: { marginLeft: 5 },
						})}
					/>
				</>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default MainStackNavigator;
