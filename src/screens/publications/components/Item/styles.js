import { StyleSheet } from 'react-native';
import { Colors } from '../../../../lib/constants';

const styles = (p) =>
	StyleSheet.create({
		baseboard: {
			color: Colors.secondary_470,
			flexDirection: 'row',
			fontFamily: 'Roboto-Bold',
			fontSize: 15,
			width: '100%',
		},

		container: {
			backgroundColor: Colors.white,
			borderRadius: 5,
			elevation: 3,
			justifyContent: 'space-between',
			marginBottom: p.isLast ? 5 : 0,

			marginTop: 20,
			padding: 13,
			shadowColor: Colors.black,
			shadowOffset: {
				width: 0,
				height: 1,
			},
			shadowOpacity: 0.22,
			shadowRadius: 2.22,
		},

		seeMore: {
			color: Colors.primary,
			flexDirection: 'row',
			fontFamily: 'Roboto-Bold',
			fontSize: 15,
			marginBottom: 15,
			width: '100%',
		},

		subTitle: {
			color: Colors.tertiary,
			flexDirection: 'row',
			fontFamily: 'Roboto-Regular',
			fontSize: 15,
			marginBottom: 10,
			width: '100%',
		},

		title: {
			color: Colors.primary,
			flexDirection: 'row',
			fontFamily: 'Roboto-Bold',
			fontSize: 20,
			marginBottom: 10,
			width: '100%',
		},
	});

export default styles;
