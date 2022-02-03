import { PokemonProps } from "../@types/pokemon"

const getSpecie = (specie: string) => {
	return specie.charAt(0).toUpperCase() + specie.slice(1);
}
const getHeight = (height: number) => {
	return `${height}kg`;
}
const getWeight = (weight: number) => {
	return `${weight}kg`;
}

export default (data: PokemonProps) => {
	const specie = getSpecie(data.species.name);
	const height = getHeight(data.height);
	const weight = getHeight(data.weight);
	return [
		{
			title: "Specie",
			value: specie,
		},
		{
			title: "Height",
			value: height,
		},
		{
			title: "Weight",
			value: weight,
		},
		{
			title: "Abilities",
			value: '',
		},
		{
			title: "Weaknesses",
			value: '',
		}
	]
}