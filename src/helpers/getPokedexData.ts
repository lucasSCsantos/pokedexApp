import { PokemonProps, TypeProps } from "../@types/pokemon"
import getDamageRelations, { DamageProps } from "../services/getDamageRelations";
import getTypeDetails from "../services/getTypeDetails";
import getSpecieDetails from "../services/getSpecieDetails";

const getSpecie = (specie: string) => {
	return specie.charAt(0).toUpperCase() + specie.slice(1);
}
const getHeight = (height: number) => {
	return `${height/10}m`;
}
const getWeight = (weight: number) => {
	return `${weight/10}kg`;
}
const getAbility = (ability: string) => {
	return "1. " + ability.charAt(0).toUpperCase() + ability.slice(1);
}

export const getWeaknesses = async (types: TypeProps) => {
	let typesData: DamageProps[] = [];
	await Promise.all(types.map(async (type) => {
		const result = await getTypeDetails(type.type.name);
		typesData = [...typesData, result]
	}))
	const weaknesses = getDamageRelations(...typesData);
	return weaknesses;
}

export default async (data: PokemonProps) => {
	const specie = getSpecie(data.species.name);
	const height = getHeight(data.height);
	const weight = getWeight(data.weight);
	const ability = getAbility(data.abilities[0].ability.name)
	const weaknesses = await getWeaknesses(data.types)
	return [
		{
			title: "Specie",
			value: specie,
			id: 0,
		},
		{
			title: "Height",
			value: height,
			id: 1,
		},
		{
			title: "Weight",
			value: weight,
			id: 2,
		},
		{
			title: "Ability",
			value: ability,
			id: 3,
		},
		{
			title: "Weaknesses",
			value: weaknesses,
			id: 4,
		}
	]
}