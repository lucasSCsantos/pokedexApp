export type StatProps = {
	base_stat: number;
	effort: number;
	stat: {
		name: string,
		url: string,
	}
}

export default (array: StatProps[]) => {
	const stats = array.map((r: StatProps) => {
		const { base_stat, stat } = r;
		let max_stat: number;
		let min_stat: number;
		
		if (stat.name === 'hp') {
			max_stat = (base_stat * 2) + 204;
			min_stat = (base_stat * 2) + 110;
		} else {
			max_stat = Math.floor((base_stat * 2 + 99) * 1.1);
			min_stat = Math.floor((base_stat * 2 + 4) / 1.1);
		}

		return {
			name: stat.name,
			base_stat,
			min_stat,
			max_stat,
		}
	})
	return stats;
}

//Pega o stats base e apartir disso calcula o max e o min pra cada stat