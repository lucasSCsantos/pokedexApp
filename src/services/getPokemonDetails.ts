import url from "./url"

export default async (name: string) => {
	const pokemon = await fetch(`${url}pokemon/${name}`);
	const json = await pokemon.json();
	return json;
}