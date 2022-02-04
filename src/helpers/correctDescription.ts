export type FlavorEntry = {
	flavor_text: string, 
	language: {
		name: string,
	}
}

export default (array: FlavorEntry[]) => {
	const english = array.find(({ language }) => language.name === 'en');

	const description = english?.flavor_text
		.replace(/\n/g, ' ')
      .replace('POKéMON', 'pokemon');
	
	return description;
};