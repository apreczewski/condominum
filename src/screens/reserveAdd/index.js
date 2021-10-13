import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import StepIndicator from 'react-native-step-indicator';

import { Step1, Step2, Step3, Step4 } from './components/Steps';

import ModalInfo from './components/ModalInfoAmbient';

import * as Navigation from '../../lib/utils/navigation';

import ModalFeedback from '../../components/ModalFeedback';

import { Pallete } from '../../lib/constants';

import { styles, indicatorStyle } from './styles';

const arrInit = Array(4).fill(1);
arrInit[0] = 1;

const ambients = [
	{
		id: '1',
		title: 'Sala de festas',
		image: 'https://cdn0.casamentos.com.br/vendor/1632/3_2/960/jpg/10947304-719326434843464-1501641313814063317-n_13_151632.jpeg',
		description:
			'A brinquedoteca possui peças para crianças de 2 a 12 anos A brinquedoteca possui peças para crianças de 2 a 12 anos A brinquedoteca possui peças para crianças de 2 a 12 anosA brinquedoteca possui peças para crianças de 2 a 12 anos A brinquedoteca possui peças para crianças de 2 a 12 anosA brinquedoteca possui peças para crianças de 2 a 12 anosA brinquedoteca possui peças para crianças de 2 a 12 anos A brinquedoteca possui peças para crianças de 2 a 12 anos A brinquedoteca possui peças para crianças de 2 a 12 anos A brinquedoteca possui peças para crianças de 2 a 12 anos A brinquedoteca possui peças para crianças de 2 a 12 anos A brinquedoteca possui peças para crianças de 2 a 12 anos A brinquedoteca possui peças para crianças de 2 a 12 anos A brinquedoteca possui peças para crianças de 2 a 12 anos A brinquedoteca possui peças para crianças de 2 a 12 anos A brinquedoteca possui peças para crianças de 2 a 12 anos A brinquedoteca possui peças para crianças de 2 a 12 anos ',
		area: '30 m2',
		capacity: '20',
		capacityFoot: '20',
		type: 'Individual',
		tax: 'R$ 150,00',
		schedule: '3',
		cancel: '3',
		limit: '20',
		rules: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
	},
	{
		id: '2',
		title: 'Sala de festas 2',
		image: 'https://www.construtoraperini.com.br/wp-content/uploads/2015/09/wine65.png',
		description:
			'A brinquedoteca possui peças para crianças de 2 a 12 anos',
		area: '30 m2',
		capacity: '20',
		capacityFoot: '20',
		type: 'Individual',
		tax: 'R$ 150,00',
		schedule: '3',
		cancel: '3',
		limit: '20',
		rules: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
	},
	{
		id: '3',
		title: 'Sala de festas 3',
		image: 'https://www.construtoraperini.com.br/wp-content/uploads/2015/09/wine65.png',
		description:
			'A brinquedoteca possui peças para crianças de 2 a 12 anos',
		area: '30 m2',
		capacity: '20',
		capacityFoot: '20',
		type: 'Individual',
		tax: 'R$ 150,00',
		schedule: '3',
		cancel: '3',
		limit: '20',
		rules: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
	},
];

const hours = [
	{
		id: '1',
		start: '8:00',
		end: '10:00',
		status: 'Disponível',
	},
	{
		id: '2',
		start: '8:00',
		end: '10:00',
		status: 'Indisponível',
	},
	{
		id: '3',
		start: '8:00',
		end: '10:00',
		status: 'Bloqueado',
	},
	{
		id: '4',
		start: '8:00',
		end: '10:00',
		status: 'Disponível',
	},
];

export default function ReserveAddScreen() {
	const [releaseStep, setRelease] = useState(arrInit);
	const [currentPage, setCurrentPage] = useState(0);
	const [selectAmbient, setSelectAmbient] = useState(false);
	const [selectDay, setSelectDay] = useState(false);
	const [selectHour, setSelectHour] = useState(false);
	const [accept, setAccept] = useState(false);
	const [modalInfo, setModalInfo] = useState(false);
	const [itemModal, setItemModal] = useState({});

	const onStepPress = (position) => {
		if (releaseStep[position] === 1) {
			setCurrentPage(position);
		}
	};

	const nextStep = (position) => {
		const newArr = [...releaseStep];
		newArr[position] = 1;
		setRelease(newArr);
		setCurrentPage(position);
	};

	const openModal = (item) => {
		setItemModal(item);
		setModalInfo(true);
	};

	return (
		<View style={Pallete.screen}>
			<View style={styles.stepIndicator}>
				<StepIndicator
					stepCount={4}
					customStyles={indicatorStyle}
					currentPosition={currentPage}
					onPress={onStepPress}
				/>
			</View>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.view}>
				{(() => {
					switch (currentPage) {
						case 0:
							return (
								<Step1
									ambients={ambients}
									next={(v) => nextStep(v)}
									select={selectAmbient}
									onSelect={setSelectAmbient}
									onSelectInfo={openModal}
								/>
							);
						case 1:
							return (
								<Step2
									onSelect={setSelectDay}
									select={selectDay}
									onSelectInfo={openModal}
									selectAmbient={selectAmbient}
									next={(v) => nextStep(v)}
								/>
							);
						case 2:
							return (
								<Step3
									hours={hours}
									select={selectHour}
									selectAmbient={selectAmbient}
									onSelectInfo={openModal}
									onSelect={setSelectHour}
									selectDay={selectDay}
									next={(v) => nextStep(v)}
								/>
							);
						case 3:
							return (
								<Step4
									selectHour={selectHour}
									selectAmbient={selectAmbient}
									onSelectInfo={openModal}
									selectDay={selectDay}
									accept={accept}
									setAccept={setAccept}
									cancel={() =>
										Navigation.navigate('Reserves')
									}
									submit={() => {}}
								/>
							);
						default:
							return null;
					}
				})()}
			</ScrollView>
			<ModalInfo
				visible={modalInfo}
				close={() => setModalInfo(false)}
				item={itemModal}
			/>
			<ModalFeedback
				visible={false}
				title="Sua reserva foi confirmada com sucesso! "
			/>
		</View>
	);
}
