export type DamageProps = {
	double_damage_from: {
		name: string,
		url: string,
	}[]
	double_damage_to: {
		name: string,
		url: string,
	}[]
}

export type DataProps = {
	ddf: string[],
	ddt: string[],
}

export default (...objects: DamageProps[]) => {
	const data: DataProps = {
	 	ddf: [],
		ddt: [],
	}

	objects.map((object) => {
		const {
			double_damage_from,
			double_damage_to
		} = object;
	
		const doubleDamageFrom = double_damage_from.map((r) => (r.name));
		const doubleDamageTo = double_damage_to.map((r) => (r.name));

		data.ddf = [...data.ddf,...doubleDamageFrom];
		data.ddt = [...data.ddt,...doubleDamageTo];
	})

	const weakness = data.ddf.filter(i => !data.ddt.includes(i));

	return [...new Set(weakness)];
}

//Pega independente da quantidade de tipos, um objeto de damage relations
//Após isso separa em duas listas as que recebe dando duplo e as que da dano duplo
//Depois disso faz a intercessão entre as duas e pega todas que recebe dano duplo e nao da dano duplo