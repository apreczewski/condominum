import React from 'react';
import { View, Text, Pressable, Image, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { AntDesign } from '@expo/vector-icons';

import { Colors, Pallete, Strings } from '../../../../lib/constants';

import styles from './styles';

function ModalInfoAmbient({ visible, close, item }) {
	return (
		<Modal
			backdropOpacity={0.2}
			isVisible={visible}
			backdropTransitionInTiming={800}
			backdropTransitionOutTiming={200}
			animationInTiming={500}
			onBackdropPress={close}
			onRequestClose={close}>
			<View style={styles.container}>
				<View style={styles.content}>
					<Pressable style={styles.close} onPress={close}>
						<AntDesign
							name="close"
							size={35}
							color={Colors.tertiary}
						/>
					</Pressable>
					<Image
						source={{ uri: item.image }}
						resizeMode="cover"
						style={styles.image}
					/>
					<ScrollView
						showsVerticalScrollIndicator={false}
						style={styles.maxSize}
						contentContainerStyle={styles.viewText}>
						<Text style={[Pallete.paragraph, styles.marginBottom]}>
							{item.description}
						</Text>
						<View style={styles.row}>
							<Text style={Pallete.paragraph}>
								{`${Strings.area} `}
							</Text>
							<Text style={Pallete.paragraph}>{item.area}</Text>
						</View>
						<View style={styles.row}>
							<Text style={Pallete.paragraph}>
								{`${Strings.capacitySit} `}
							</Text>
							<Text style={Pallete.paragraph}>
								{item.capacity}
							</Text>
						</View>
						<View style={styles.row}>
							<Text style={Pallete.paragraph}>
								{`${Strings.capacityFoot} `}
							</Text>
							<Text style={Pallete.paragraph}>
								{item.capacityFoot}
							</Text>
						</View>
						<View style={styles.row}>
							<Text style={Pallete.paragraph}>
								{`${Strings.typeAmbient} `}
							</Text>
							<Text style={Pallete.paragraph}>{item.type}</Text>
						</View>
						<View style={styles.row}>
							<Text style={Pallete.paragraph}>
								{`${Strings.usageFee} `}
							</Text>
							<Text style={Pallete.paragraph}>{item.tax}</Text>
						</View>
						<View style={styles.row}>
							<Text style={Pallete.paragraph}>
								{`${Strings.schedulingUntil} `}
							</Text>
							<Text style={Pallete.paragraph}>
								{item.schedule}
							</Text>
						</View>
						<View style={styles.row}>
							<Text style={Pallete.paragraph}>
								{`${Strings.cancelUntil} `}
							</Text>
							<Text style={Pallete.paragraph}>{item.cancel}</Text>
						</View>
						<View style={styles.row}>
							<Text style={Pallete.paragraph}>
								{`${Strings.limitAmbient} `}
							</Text>
							<Text style={Pallete.paragraph}>{item.limit}</Text>
						</View>
					</ScrollView>
				</View>
			</View>
		</Modal>
	);
}

ModalInfoAmbient.propTypes = {
	visible: PropTypes.bool.isRequired,
	close: PropTypes.func,
	item: PropTypes.shape({
		image: PropTypes.string,
		description: PropTypes.string,
		area: PropTypes.string,
		capacity: PropTypes.string,
		capacityFoot: PropTypes.string,
		type: PropTypes.string,
		tax: PropTypes.string,
		schedule: PropTypes.string,
		cancel: PropTypes.string,
		limit: PropTypes.string,
	}).isRequired,
};

ModalInfoAmbient.defaultProps = {
	close: () => {},
};

export default ModalInfoAmbient;
