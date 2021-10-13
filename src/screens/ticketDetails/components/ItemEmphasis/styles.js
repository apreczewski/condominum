import { StyleSheet } from 'react-native';
import { Colors } from '../../../../lib/constants';

const styles = (p) =>
	StyleSheet.create({
		anchorSeeMore: {
			alignItems: 'flex-end',
			flexDirection: 'row',
			marginTop: 15,
			width: '100%',
		},

		container: {
			alignItems: 'flex-start',
			backgroundColor: Colors.white,
			borderRadius: 5,
			flexDirection: 'column',
			flex: 1,
			justifyContent: 'flex-end',
			marginTop: 10,
			paddingHorizontal: 15,
			paddingVertical: 15,
			width: '100%',
		},
		date: {
			color: Colors.secondary,
			fontSize: 15,
			fontWeight: 'bold',
		},

		label: {
			borderColor: p.borderColor,
			borderRadius: 25,
			borderStyle: 'solid',
			borderWidth: 1,
			flexDirection: 'row',
			paddingHorizontal: 10,
			paddingVertical: 10,
			width: 220,
		},
		pay: {
			marginRight: 10,
		},

		row: {
			alignItems: 'center',
			flexDirection: 'row',
			marginBottom: 10,
			width: 210,
		},

		text: {
			color: Colors.primary,
			flexDirection: 'row',
			fontSize: 30,
			fontWeight: 'bold',
			width: '100%',
		},

		textInfo: {
			alignItems: 'center',
			flexDirection: 'row',
			width: '100%',
		},

		textSeeMore: {
			color: Colors.secondary,
			fontFamily: 'Roboto-Bold',
			fontSize: 18,
			height: '100%',
		},

		textStatus: {
			color: p.color,
			fontFamily: 'Roboto-Regular',
			fontSize: 14,
		},
	});

export default styles;
