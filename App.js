import React from 'react';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { decode, encode } from 'base-64';
import Toast from 'react-native-toast-message';

import configureStore from './src/store';

import MainStackNavigator from './src/navigation/AppNavigator';

import Fonts from './src/lib/constants/fonts';

if (!global.btoa) {
	global.btoa = encode;
}

if (!global.atob) {
	global.atob = decode;
}

export const store = configureStore();

export default function App() {
	const [fontsLoaded] = useFonts({
		'Roboto-Bold': Fonts.Bold,
		'Roboto-Regular': Fonts.Regular,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}
	return (
		<Provider store={store}>
			<MainStackNavigator />
			<Toast ref={(ref) => Toast.setRef(ref)} />
		</Provider>
	);
}
