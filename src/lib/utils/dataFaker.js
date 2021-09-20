import faker from 'faker';

export const publications = () => {
	const list = [];

	for (let index = 0; index < 50; index += 1) {
		const element = {
			id: faker.unique,
			url: faker.image.business,
			title: faker.commerce.productName,
			subTitle: faker.commerce.productDescription,
			date: faker.date.past.toString(),
			like: faker.datatype.boolean,
			user: faker.image.avatar,
		};

		list.push(element);
	}

	return list;
};
