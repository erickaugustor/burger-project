export default (ingredientes) => {
	if (ingredientes.indexOf('alface') >= 0) {
		if (ingredientes.indexOf('bacon') < 0) {
			return {
				nome: 'fit',
				desconto: 0.9
			};
		}
	} 
	return 1;
};