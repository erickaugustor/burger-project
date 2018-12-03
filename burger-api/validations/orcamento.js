import Joi from 'joi';

export default (orcamento) => {
	const schema = {
		nome: Joi.string().required(),
		pedido: Joi.array().items(
			Joi.object({
				nome: Joi.string().required(),
				quantidade: Joi.number().required(),
			})
		).required(),
	};

	return Joi.validate(orcamento, schema);
};