import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import StepIndicator from 'react-native-step-indicator';

import { Step1, Step2, Step3, Step4 } from './components/Steps';

import { Pallete } from '../../lib/constants';

import { styles, indicatorStyle } from './styles';

const arrInit = Array(4).fill(1);
arrInit[0] = 1;

const ambients = [
	{
		id: '1',
		title: 'Sala de festas',
		image: 'https://www.construtoraperini.com.br/wp-content/uploads/2015/09/wine65.png',
	},
	{
		id: '2',
		title: 'Sala de festas 2',
		image: 'https://www.construtoraperini.com.br/wp-content/uploads/2015/09/wine65.png',
	},
	{
		id: '3',
		title: 'Sala de festas 3',
		image: 'https://www.construtoraperini.com.br/wp-content/uploads/2015/09/wine65.png',
	},
];

export default function ReserveAddScreen() {
	const [releaseStep, setRelease] = useState(arrInit);
	const [currentPage, setCurrentPage] = useState(0);
	const [selectAmbient, setSelectAmbient] = useState(false);

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
			<ScrollView showsVerticalScrollIndicator={false}>
				{(() => {
					switch (currentPage) {
						case 0:
							return (
								<Step1
									ambients={ambients}
									next={nextStep}
									select={selectAmbient}
									onSelect={setSelectAmbient}
								/>
							);
						case 1:
							return <Step2 />;
						case 2:
							return <Step3 />;
						case 3:
							return <Step4 />;
						default:
							return null;
					}
				})()}
			</ScrollView>
		</View>
	);
}
