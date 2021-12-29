const env = {
	dev: 'dev',
	stg: 'stg',
	product: 'product',
};

const API_URL = {
	dev: 'http://adesenvprolar.classcode.com.br/v1/',
	stg: 'http://homolmulti.classcode.com.br/v1/',
	product: 'https://apiapp.prolar.imb.br/v1/',
};

const TERMS_URL = {
	dev: 'http://homol.classcode.com.br/multi/html/termo-de-uso.html',
	stg: 'http://homol.classcode.com.br/multi/html/termo-de-uso.html',
	product:
		'https://repos.prolar.imb.br/html/politica-de-privacidade-termos.html',
};

const POLICES_URL = {
	dev: 'http://homol.classcode.com.br/multi/html/politica-de-privacidade.html',
	stg: 'http://homol.classcode.com.br/multi/html/politica-de-privacidade.html',
	product:
		'https://repos.prolar.imb.br/html/politica-de-privacidade-termos.html',
};

const currentEnv = env.product;

export const BASE_API = API_URL[currentEnv];
export const POLICES = POLICES_URL[currentEnv];
export const TERMS = TERMS_URL[currentEnv];
