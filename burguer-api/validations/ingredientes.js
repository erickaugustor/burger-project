import Joi from 'joi';

export default (ingrediente) => {
	const schema = {
		nome: Joi.string().min(2).required(),
		valor: Joi.number().required(),
	};

	return Joi.validate(ingrediente, schema);
};