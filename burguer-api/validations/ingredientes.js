import Joi from 'joi';

export default (ingrediente) => {
	const schema = {
		lanche: Joi.string().min(2).required(),
		ingrediente: Joi.number().required(),
	};

	return Joi.validate(ingrediente, schema);
};