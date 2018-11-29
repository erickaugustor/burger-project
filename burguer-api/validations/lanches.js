import Joi from 'joi';

export default (ingrediente) => {
	const schema = {
		lanche: Joi.string().min(2).required(),
		ingredientes: Joi.array().required(),
	};

	return Joi.validate(ingrediente, schema);
};