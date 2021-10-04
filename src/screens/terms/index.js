import * as React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

import { TERMS } from '../../config/environment';
import { Pallete } from '../../lib/constants';

class TermsScreen extends React.PureComponent {
	render() {
		return (
			<View style={Pallete.screen}>
				<WebView
					source={{
						uri: TERMS,
					}}
				/>
			</View>
		);
	}
}

export default TermsScreen;
