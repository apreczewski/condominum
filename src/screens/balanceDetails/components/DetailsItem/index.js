import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Colors, Pallete, Strings } from '../../../../lib/constants';
import styles from './styles';
import { ValueFormat } from '../../../../components/ValueFormat';

function DetailsItem({ itemDetails }) {
	return (
		<View style={styles.card}>
			<View style={styles.colLeft}>
				<Text style={styles.cardTitle}>{`Dia ${moment(
					itemDetails?.data,
					'DD-MM-YYYY HH: mm: ss',
				).format('DD/MM')}`}</Text>
				<Text style={Pallete.paragraph}>{Strings.conta}:</Text>
				<Text style={Pallete.paragraph}>{Strings.tipo}:</Text>
				<Text style={Pallete.paragraph}>{Strings.descricao}:</Text>
				<Text style={Pallete.paragraph}>{Strings.valor}:</Text>
			</View>
			<View style={styles.colRight}>
				<Text style={styles.h3}>{itemDetails.conta}</Text>
				<Text style={styles.h3}>{itemDetails.tipo}</Text>
				<Text style={styles.h3}>{itemDetails.descricao}</Text>
				<ValueFormat
					style={{
						...styles.h3,
						color:
							itemDetails.valor >= 0
								? Colors.secondary
								: Colors.primary,
					}}
					value={itemDetails.valor}
				/>
			</View>
		</View>
	);
}

export default DetailsItem;

DetailsItem.propTypes = {
	itemDetails: PropTypes.arrayOf(
		PropTypes.shape({
			data: PropTypes.string,
			conta: PropTypes.string,
			tipo: PropTypes.string,
			descricao: PropTypes.string,
			valor: PropTypes.number,
		}),
	).isRequired,
};
