import React from 'react';
import { ScrollView, View } from 'react-native';
import { Pallete, Strings } from '../../lib/constants';
import { ItemPublications } from './components/ItemPublications';
import { ItemTickets } from './components/ItemTickets';
import { ItemSchedules } from './components/ItemSchedules';
import { HeaderHome } from '../../components/HeaderHome';

export default function HomeScreen() {
	return (
		<ScrollView vertical>
			<View style={Pallete.screen}>
				<HeaderHome
					title={Strings.home}
					user={Strings.homeUser}
					subTitle={Strings.homeDescription}
				/>
				<ItemPublications />
				<ItemTickets />
				<ItemSchedules />
			</View>
		</ScrollView>
	);
}
