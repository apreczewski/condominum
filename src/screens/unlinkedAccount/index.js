import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import * as RootNavigator from '../../lib/utils/navigation';
import { Pallete, Strings } from '../../lib/constants';
import styles from './styles';
import Button from '../../components/Button';

export default function UnlinkedAccountScreen() {
	return (
		<ScrollView>
			<View style={Pallete.screen}>
				<View style={styles.viewTitle}>
					<Text style={styles.title}>
						Conta criada! Solicite seu vínculo!
					</Text>
				</View>

				<View style={styles.viewText}>
					<Text style={styles.text}>
						{Strings.unlinkedAccountText}
					</Text>
				</View>

				<Button
					text={Strings.access}
					onPress={() => RootNavigator.navigate('Auth')}
				/>
			</View>
		</ScrollView>
	);
}
