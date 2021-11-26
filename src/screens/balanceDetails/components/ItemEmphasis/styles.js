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

		anchorShare: {
			alignItems: 'center',
			backgroundColor: Colors.white,
			borderRadius: 5,
			justifyContent: 'center',
			padding: 10,
		},

		bodyLeft: {
			alignItems: 'flex-start',
			flexDirection: 'column',
			height: '100%',
			justifyContent: 'center',
			width: '70%',
		},

		bodyRight: {
			alignItems: 'flex-end',
			flex: 1,
			height: '100%',
			justifyContent: 'center',
			padding: 0,
			width: '30%',
		},

		container: {
			alignItems: 'flex-start',
			borderRadius: 5,
			flexDirection: 'row',
			flex: 1,
			justifyContent: 'flex-end',
			marginTop: 10,
			width: '100%',
		},
		label: {
			backgroundColor: Colors.backgroundLabel,
			borderRadius: 25,
			borderStyle: 'solid',
			borderWidth: 1,
			color: Colors.secondary,
			flexDirection: 'row',
			fontFamily: 'Roboto-Regular',
			fontSize: 15,
			justifyContent: 'space-between',
			marginTop: 10,
			paddingHorizontal: 10,
			paddingVertical: 10,
			width: 220,
		},

		paragraph: {
			color: p.color,
			fontFamily: 'Roboto-Regular',
			fontSize: 14,
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
			justifyContent: 'space-between',
			width: '80%',
		},

		textSeeMore: {
			color: Colors.secondary,
			fontFamily: 'Roboto-Bold',
			fontSize: 20,
			height: '100%',
		},

		textShare: {
			color: Colors.primary,
			fontSize: 10,
			fontWeight: 'bold',
		},
	});

export default styles;
