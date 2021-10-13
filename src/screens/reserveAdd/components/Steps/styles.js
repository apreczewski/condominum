import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../../lib/constants';

const styles = StyleSheet.create({
	calendar: {
		borderRadius: 5,
		padding: 10,
	},
	cardAmbient: {
		alignItems: 'center',
		backgroundColor: Colors.white,
		borderColor: Colors.white,
		borderRadius: 5,
		borderWidth: 1,
		elevation: 3,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
		padding: 13,
		shadowColor: Colors.black,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
	},
	cardInfoSelect: {
		backgroundColor: Colors.white,
		borderRadius: 5,
		elevation: 3,
		marginBottom: 20,
		padding: 13,
		shadowColor: Colors.black,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
	},
	checkboxRules: {
		paddingTop: 15,
	},
	imgAmbient: {
		height: 45,
		marginRight: 15,
		width: 45,
	},
	listAmbient: {
		marginTop: 25,
	},
	marginBtn: {
		marginTop: 10,
	},
	row: {
		alignItems: 'center',
		flexDirection: 'row',
	},
	rowSpace: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 5,
	},
	rulesView: {
		maxHeight: Metrics.screenHeight / 3,
	},
	statusTxt: {
		color: Colors.gray,
		fontFamily: 'Roboto-Regular',
		fontSize: 12,
	},
	titleRules: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Regular',
		fontSize: 18,
		marginBottom: 10,
	},
	view: {
		flex: 1,
	},
	viewButtons: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	viewHeader: {
		marginBottom: 25,
	},
});

export default styles;
