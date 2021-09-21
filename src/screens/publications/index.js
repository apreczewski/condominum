import React from 'react';
import { View, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TitleWithSubTitle from '../../components/TitleWithSubTitle';
import { Colors, Pallete, Strings } from '../../lib/constants';
import styles from './styles';
import CardPublicationEmphasis from './components/CardPublicationEmphasis';
import CardPublicationDefault from './components/CardPublicationDefault';
import publication from './data.json';

export default function PublicationsScreen() {
	return (
		<ScrollView>
			<View style={Pallete.screen}>
				<View style={styles.row}>
					<TitleWithSubTitle
						title={Strings.publication}
						subTitle={Strings.publicationDescription}
					/>
					<MaterialCommunityIcons
						name="tooltip-text-outline"
						size={50}
						color={Colors.secondary}
					/>
				</View>

				<View>
					<CardPublicationEmphasis
						id={publication[0].id}
						title={publication[0].title}
						baseboard={publication[0].baseboard}
					/>

					{publication &&
						publication.map(
							(item, index) =>
								index > 0 && (
									<CardPublicationDefault
										key={item.id}
										id={item?.id}
										title={item.title}
										subTitle={item.subTitle}
										seeMore={item.seeMore}
										baseboard={item.baseboard}
									/>
								),
						)}
				</View>
			</View>
		</ScrollView>
	);
}
