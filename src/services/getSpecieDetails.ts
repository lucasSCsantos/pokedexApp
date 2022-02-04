import url from "./url"

export default async (name: string) => {
	const specie = await fetch(`${url}pokemon-species/${name}`);
	const json = await specie.json();
	return json;
}