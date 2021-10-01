import * as React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

import { Pallete } from '../../lib/constants';

import { POLICES } from '../../config/environment';

class PolicesScreen extends React.PureComponent {
	render() {
		return (
			<View style={Pallete.screen}>
				<WebView
					source={{
						uri: POLICES,
					}}
				/>
			</View>
		);
	}
}

export default PolicesScreen;
