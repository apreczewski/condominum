import { StyleSheet } from 'react-native';
import { Colors } from '../../../../lib/constants';

const styles = (p) =>
	StyleSheet.create({
		bodyLeft: {
			alignItems: 'flex-start',
			flexDirection: 'column',
			height: 110,
			justifyContent: 'center',
			width: '85%',
		},

		bodyRight: {
			alignItems: 'center',
			flexDirection: 'row',
			height: 110,
			justifyContent: 'flex-end',
			width: '15%',
		},

		container: {
			alignItems: 'center',
			backgroundColor: Colors.white,
			borderRadius: 5,
			elevation: 3,
			flexDirection: 'row',

			flex: 1,
			height: 100,
			justifyContent: 'center',
			marginBottom: p.isLast ? 5 : 0,
			marginTop: 20,
			paddingHorizontal: 10,
			paddingVertical: 10,

			padding: 13,
			shadowColor: Colors.black,
			shadowOffset: {
				width: 0,
				height: 1,
			},
			shadowOpacity: 0.22,
			shadowRadius: 2.22,
			width: '100%',
		},

		date: {
			color: Colors.secondary,
			fontFamily: 'Roboto-Bold',
			fontSize: 20,
			marginBottom: 10,
			// marginLeft: 6,
		},

		paragraph: {
			color: p.color,
			fontFamily: 'Roboto-Regular',
			fontSize: 14,
		},

		saldo: {
			alignContent: 'space-between',
			backgroundColor: Colors.white,
			borderRadius: 25,
			borderStyle: 'solid',
			borderWidth: 1,
			color: Colors.secondary,
			flexDirection: 'row',
			fontFamily: 'Roboto-Regular',
			fontSize: 15,
			justifyContent: 'space-between',
			paddingHorizontal: 25,
			paddingVertical: 10,
			width: 200,
		},
	});

export default styles;
