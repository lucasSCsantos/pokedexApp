import theme from "../styles/theme";

export type PokemonProps = {
	id: number,
	name: string,
	types: {
		type: {
			name: string,
		}
	}[],
	species: {
		name: string,
	},
	height: number,
	weight: number,
}

export type PokemonDataProps = {
	id: string,
	pokemonName: string,
	typeList: {
		type: {
			name: string,
		}
	}[],
	type: Color,
}

export type TypeProps = {
		type: {
			name: string,
		}
}[];

export type Color = keyof typeof theme.color.background.type | keyof typeof theme.color.type;