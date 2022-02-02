import url from "./url"

export default async (name: string) => {
	const type = await fetch(`${url}type/${name}`);
	const json = await type.json();
	return json;
}