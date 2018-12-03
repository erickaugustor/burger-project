import express from 'express';
import bodyParser from 'body-parser';

// import { initializerRouter, initAplication } from './config/init';

import ingredientes from './routes/ingredientes';
import lanches from './routes/lanches';
import orcamento from './routes/orcamento';

import error from './middlewares/error';	

const port = process.env.PORT || 3006;
const app = express();

// app.use('/', initializerRouter(app));
app.use(bodyParser.json());

app.all('/api/*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With');
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST');
	return next();
});

app.all('/api/*', function(req, res, next) {
	if (req.method.toLowerCase() !== 'options') {
		return next();
	}
	return res.sendStatus(204);
});

app.use('/api/ingredientes', ingredientes);
app.use('/api/lanches', lanches);
app.use('/api/orcamento', orcamento);

app.use(error);

app.listen(port, () => console.log(`Listening on port ${port}...`));

export default app;