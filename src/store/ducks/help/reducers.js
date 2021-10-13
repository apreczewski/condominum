import { SET_HELP } from './types';

const initialState = {
	help: [
		{
			id: 0,
			titulo: 'Para que serve o Fundo de Reserva do condomínio? Quais são os procedimentos para implementá-lo?',
		},

		{
			id: 1,
			titulo: 'Muitos moradores de condomínio costumam procurar os síndicos fora do expediente comercial. De noite madrugada ou de manhã cedo. Como estabelecer este horário e comunicar aos moradores?',
		},

		{
			id: 2,
			titulo: 'Ao encerrar um contrato de aluguel imobiliário, que medidas devem ser tomadas pelo proprietário para garantir o recebimento do imóvel nas mesmas condições de quando foi entregue?',
		},

		{
			id: 3,
			titulo: 'O proprietário de um imóvel pode realizar as obras de reparo no apartamento, sem conhecimento do inquilino e antes da assinatura do distrato?',
		},

		{
			id: 4,
			titulo: 'O síndico pode usar o dinheiro do condomínio para fazer empréstimos ou para suas despesas pessoais?',
		},

		{
			id: 5,
			titulo: 'Posso ocupar/troca vaga garagem com outro morador?',
		},

		{
			id: 6,
			titulo: 'Quem seria a responsabilidade da tubulação de gas do PI até o apartamento, condômino ou síndico?',
		},

		{
			id: 7,
			titulo: 'A Convenção de condomínio pode proibir genericamente presença de animais?',
		},

		{
			id: 8,
			titulo: 'Compradores de imóveis respondem por dívida condominial anterior a aquisição?',
		},

		{
			id: 9,
			titulo: 'É possível utilização exclusiva por condômino de área comum do condomínio?',
		},
	],
};

const helpReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_HELP:
			return {
				...state,
				help: action.data,
			};

		default:
			return state;
	}
};

export default helpReducer;
