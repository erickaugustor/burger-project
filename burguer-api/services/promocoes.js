export default (quantidade, limite = 3) => {
	if (quantidade < 3) return quantidade;
	return quantidade - parseInt(quantidade/limite);
};