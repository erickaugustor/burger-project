export default {
	ingredientes: [
		{
			ingrediente: 'alface',
			valor: 0.40,
		},
		{
			ingrediente: 'bacon',
			valor: 2.00,
		},
		{
			ingrediente: 'hamburguer',
			valor: 3.00,
		},
		{
			ingrediente: 'ovo',
			valor: 0.80,
		},
		{
			ingrediente: 'queijo',
			valor: 1.50,
		}
	],
	lanches: [
		{
			lanche: 'x-bacon',
			ingrediente: ['bacon', 'hamburguer', 'queijo'],
		},
		{
			lanche: 'x-burguer',
			ingrediente: ['hamburguer', 'queijo'],
		},
		{
			lanche: 'x-egg',
			ingrediente: ['ovo', 'hamburguer', 'queijo'],
		},
		{
			lanche: 'x-egg bacon',
			ingrediente: ['ovo', 'bacon', 'hamburguer', 'queijo'],
		}
	],
};