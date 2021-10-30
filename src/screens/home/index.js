import React from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import PropTypes from 'prop-types';

import { Pallete, Strings } from '../../lib/constants';
import { ItemPublications } from './components/ItemPublications';
import { ItemTickets } from './components/ItemTickets';
import { ItemSchedules } from './components/ItemSchedules';
import { HeaderHome } from '../../components/HeaderHome';
import { publicationsActions, tickesActions } from '../../store/actions';

function HomeScreen({
	onGetPublication,
	onGetTicket,
	ItemPublication,
	ItemTicket,
}) {
	useFocusEffect(
		React.useCallback(() => {
			onGetPublication();
			onGetTicket();
		}, []),
	);

	return (
		<ScrollView vertical>
			<View style={Pallete.screen}>
				<HeaderHome
					title={Strings.home}
					user={Strings.homeUser}
					subTitle={Strings.homeDescription}
				/>
				<ItemPublications item={ItemPublication} />
				<ItemTickets item={ItemTicket} />
				<ItemSchedules />
			</View>
		</ScrollView>
	);
}

HomeScreen.propTypes = {
	onGetPublication: PropTypes.func.isRequired,
	onGetTicket: PropTypes.func.isRequired,
	ItemPublication: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			url: PropTypes.string,
			title: PropTypes.string,
			subTitle: PropTypes.string,
			date: PropTypes.string,
			like: PropTypes.bool,
		}),
	).isRequired,

	ItemTicket: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			valor: PropTypes.string,
			vencimento: PropTypes.string,
			situacao: PropTypes.string,
		}),
	).isRequired,
};

const mapStateToProps = (state) => ({
	ItemPublication: state.publications.list,
	ItemTicket: state.tickes.list,
});

const mapDispatchToProps = (dispatch) => ({
	onGetPublication: () => dispatch(publicationsActions.getList()),
	onGetTicket: () => dispatch(tickesActions.getList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
