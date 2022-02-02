import url from "./url"

export default async () => {
	const pokemons = await fetch(`${url}pokemon?limit=151`);
	const json = await pokemons.json();
	const { results } = json;
	return results;
}