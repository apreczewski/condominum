import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
// import PropTypes from 'prop-types';

import { Feather, AntDesign } from '@expo/vector-icons';
import styles from './styles';
import Images from '../../lib/constants/images';
import publication from '../publications/data.json';
import { Colors } from '../../lib/constants';
import * as Navigation from '../../lib/utils/navigation';

function PublicationExpandedScreen() {
	/* {
		 url title, baseboard 
	} */
	return (
		<View style={styles.container}>
			<View>
				<TouchableOpacity
					style={styles.iconClose}
					onPress={() => Navigation.navigate('')}>
					<AntDesign name="close" size={50} color={Colors.white} />
				</TouchableOpacity>
				<Image source={Images.publication} style={styles.image} />
			</View>

			<View style={styles.body}>
				<Text style={styles.title}>{publication[0].title}</Text>

				<Text style={styles.h3}>{publication[0].subTitle}</Text>

				<View style={styles.containerBaseboard}>
					<View style={styles.imageContainerBaseboard}>
						<Image
							source={Images.user}
							style={styles.imageBaseboard}
						/>
					</View>

					<View style={styles.textContainerBaseboard}>
						<Text style={styles.baseboard}>
							{publication[0].baseboard}
						</Text>
					</View>
				</View>
			</View>

			<TouchableOpacity onPress={() => Navigation.navigate('')}>
				<View style={styles.containerLike}>
					<Feather name="heart" size={30} color={Colors.primary} />
					<Text style={styles.like}>{publication[0].like}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}

export default PublicationExpandedScreen;

/* PublicationExpandedScreen.propTypes = {
	// url: PropTypes.string,
	title: PropTypes.string,
	baseboard: PropTypes.string,
};

PublicationExpandedScreen.defaultProps = {
	// url: '',
	title: '',
	baseboard: '',
};
*/
