export const statCompare = {
	hp: 'HP',
	attack: 'Attack',
	defense: 'Defense',
	'special-attack': 'Sp. Atk',
	'special-defense': 'Sp. Def',
	speed: 'Speed'
}

export default (stat: keyof typeof statCompare) => {
	return statCompare[stat];
}