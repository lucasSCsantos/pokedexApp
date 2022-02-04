export default (name: string) => {
	const newName = name.includes('-m') ? name.replace('-m', ' ♂') : name.replace('-f', ' ♀') ;
	return newName.charAt(0).toUpperCase() + newName.slice(1);
}