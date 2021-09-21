import { StyleSheet } from 'react-native';
import { Colors } from '../../lib/constants';

const styles = (p) =>
	StyleSheet.create({
		bodyLeft: {
			height: '100%',
			width: '80%',
		},

		bodyRight: {
			alignItems: 'flex-end',
			justifyContent: 'center',
			padding: 0,
			width: '20%',
		},
		container: {
			backgroundColor: Colors.white,
			borderRadius: 5,
			flexDirection: 'row',
			justifyContent: 'space-between',
			marginTop: 10,
			paddingHorizontal: 10,
			paddingVertical: 10,
			width: '100%',
		},

		details: {
			color: Colors.secondary,
			fontFamily: 'Roboto-Bold',
			fontSize: 20,
		},
		h1: {
			color: Colors.primary,
			fontFamily: 'Roboto-Bold',
			fontSize: 30,
		},

		h3: {
			color: Colors.secondary,
			fontFamily: 'Roboto-Regular',
			fontSize: 15,
			marginRight: 5,
		},

		label: {
			borderColor: p.borderColor,
			borderRadius: 25,
			borderStyle: 'solid',
			borderWidth: 1,
			flexDirection: 'row',
			marginTop: 10,
			paddingHorizontal: 10,
			paddingVertical: 10,
			width: 220,
		},

		row: {
			alignItems: 'center',
			flexDirection: 'row',
			marginTop: 10,
			width: 210,
		},

		text: {
			color: p.color,
			fontFamily: 'Roboto-Regular',
			fontSize: 14,
		},
	});

export default styles;
