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
	abilities: {
		ability: {
			name: string,
		}
	}[]
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

export type PokedexDataProps = {
	title: string,
	value: string | number | string[],
	id: number,
}[]

export type DataProps = {
	title: string,
	value: string | number | string[],
	id: number,
}



export type Color = keyof typeof theme.color.background.type | keyof typeof theme.color.type;