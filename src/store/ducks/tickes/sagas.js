import { call, put, takeLatest } from 'redux-saga/effects';
import * as tickes from '../../../api/tickes';
import * as actions from './actions';
import * as types from './types';
import { apiActions } from '../api';
import { showToast } from '../../../lib/utils/funcitons';

export function* getList() {
	yield put(apiActions.apiStart());

	try {
		const response = yield call(tickes.getTickes);

		if (response.data) {
			yield put(actions.setList(response.data.boletolista));
		}
	} catch (error) {
		showToast('error', 'Erro ao buscar boletos');
	}

	yield put(apiActions.apiEnd());
}

export function* getItem(payload) {
	const { id } = payload;

	yield put(apiActions.apiStart());

	try {
		const {
			data: { boleto },
		} = yield call(tickes.getTicket, id);

		// console.log('boleto >> ', boleto);

		// const temp = [
		// 	...boleto.despesa,
		// 	{
		// 		conta: '211.001',
		// 		data_geracao_despesa: '18/11/2021',
		// 		descricao: 'SALÁRIOS',
		// 		id: 108,
		// 		id_sgcon: 32194900,
		// 		unidadeautonoma_id: 16,
		// 		valor: '606.12',
		// 		unidadeautonoma_descricao: 'B204',
		// 	},
		// ];

		const units = [];

		boleto.despesa.forEach((element, index) => {
			if (index === 0) {
				units.push({
					id: element?.unidadeautonoma_id,
					name: `${element?.unidadeautonoma_descricao}`,
					expenditure: [],
					subtotal: 0,
				});
				return;
			}

			units.forEach((unit) => {
				if (element?.unidadeautonoma_id !== unit.id) {
					units.push({
						id: element?.unidadeautonoma_id,
						name: `${element?.unidadeautonoma_descricao}`,
						expenditure: [],
						subtotal: 0,
					});
				}
			});
		});

		boleto.despesa.forEach((element) => {
			units.forEach((unit, index) => {
				if (element?.unidadeautonoma_id === unit.id) {
					units[index] = {
						...unit,
						expenditure: [
							...unit.expenditure,
							{
								descricao: element?.descricao,
								valor: parseFloat(element?.valor),
							},
						],
						subtotal: unit.subtotal + parseFloat(element?.valor),
					};
				}
			});
		});

		if (boleto) {
			yield put(actions.setItem({ ...boleto, despesa: units }));
		}
	} catch (error) {
		showToast('error', `Erro ao buscar boleto id: ${id}`);
	}

	yield put(apiActions.apiEnd());
}

export default function* watchBalances() {
	yield takeLatest(types.GET_LIST, getList);
	yield takeLatest(types.GET_ITEM, getItem);
}
