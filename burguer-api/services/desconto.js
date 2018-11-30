export default (ingredientes) => {
	if (ingredientes.indexOf('alface') >= 0) {
		if (ingredientes.indexOf('bacon') < 0) {
			return 0.9;
		}
	} 
	return 1;
};