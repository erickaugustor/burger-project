import log from '../services/logging';

const initializerRouter = app => (
	(req, res, next) => {
		req.log = app.log;
		next();
	}
);

const initAplication = app => app.set('log', log());

export default {
	initializerRouter,
	initAplication
};