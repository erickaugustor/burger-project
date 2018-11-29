export default {
	ingredientes: [
		{
			nome: 'alface',
			valor: 0.40,
		},
		{
			nome: 'bacon',
			valor: 2.00,
		},
		{
			nome: 'hamburguer',
			valor: 3.00,
		},
		{
			nome: 'ovo',
			valor: 0.80,
		},
		{
			nome: 'queijo',
			valor: 1.50,
		}
	],
	lanches: [
		{
			nome: 'x-bacon',
			ingredientes: ['bacon', 'hamburguer', 'queijo'],
		},
		{
			nome: 'x-burguer',
			ingredientes: ['hamburguer', 'queijo'],
		},
		{
			nome: 'x-egg',
			ingredientes: ['ovo', 'hamburguer', 'queijo'],
		},
		{
			nome: 'x-egg bacon',
			ingredientes: ['ovo', 'bacon', 'hamburguer', 'queijo'],
		}
	],
};