export default (id: number) => {
	let number = id.toString();
	switch (number.length) {
		case 1:
			number = `00${number}`
			break;
		case 2:
			number = `0${number}`
			break;
		default:
			break;
	}
	return number;
}