import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { FontAwesome, EvilIcons, Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Colors, Pallete, Strings } from '../../lib/constants';
import TitleWithSubTitle from '../../components/TitleWithSubTitle';
import ticket from '../tickets/data.json';
import * as RootNavigator from '../../lib/utils/navigation';

import styles from './styles';
import DetailsItem from './components/Item';
import TicketFeaturedItem from '../../components/TicketFeaturedItem';

function TicketDetailsScreen() {
	const item = 2; /* route.params */

	return (
		<ScrollView>
			<View style={Pallete.screen}>
				<View style={styles.row}>
					<TitleWithSubTitle
						title={Strings.ticketDetails}
						subTitle={Strings.ticketDetailsDescription}
					/>

					<FontAwesome
						name="barcode"
						size={50}
						color={Colors.secondary}
					/>
				</View>
				<TicketFeaturedItem
					onPress={() => {
						RootNavigator.navigate('TicketDetails', {
							item: ticket[item],
						});
					}}
					item={ticket[item]}
				/>
				<View style={styles.row}>
					<TouchableOpacity
						onPress={() => RootNavigator.navigate('')}>
						<View style={styles.square}>
							<FontAwesome
								name="barcode"
								size={40}
								color={Colors.primary}
							/>
							<Text style={styles.textSquare}>Copiar</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => RootNavigator.navigate('')}>
						<View style={styles.square}>
							<EvilIcons
								name="share-google"
								size={50}
								color={Colors.primary}
							/>
							<Text style={styles.textSquare}>Compartilhar</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => RootNavigator.navigate('')}>
						<View style={styles.square}>
							<Feather
								name="download"
								size={40}
								color={Colors.primary}
							/>
							<Text style={styles.textSquare}>Baixar</Text>
						</View>
					</TouchableOpacity>
				</View>
				<DetailsItem id={item} />
			</View>
		</ScrollView>
	);
}

TicketDetailsScreen.propTypes = {
	route: PropTypes.shape({
		params: PropTypes.shape({
			item: PropTypes.shape({
				id: PropTypes.number,
				value: PropTypes.number,
				dueDate: PropTypes.string,
				name: PropTypes.string,
				state: PropTypes.number,
				details: PropTypes.arrayOf(
					PropTypes.shape({
						text: PropTypes.string,
						value: PropTypes.number,
					}),
				),
			}),
		}),
	}).isRequired,
};

const mapStateToProps = (state) => ({
	balanceActions: state.balance.balanceActions,
});

export default connect(mapStateToProps)(TicketDetailsScreen);
