import url from "./url"

export default async (name: string) => {
	const type = await fetch(`${url}ability/${name}`);
	const json = await type.json();
	return json;
}