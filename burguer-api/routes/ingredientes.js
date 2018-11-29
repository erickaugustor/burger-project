import express from 'express';

import wrapAsync from '../middlewares/wrapAsync';

import data from '../utils/data';

const routes = express.Router();

routes.get('/', wrapAsync(async (req, res) => {
  //Test WISTON: throw 'erro';
  res.send(data.ingredientes);
}));

export default routes;