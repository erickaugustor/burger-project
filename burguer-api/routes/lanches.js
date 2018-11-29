import express from 'express';

import wrapAsync from '../middlewares/wrapAsync';

import data from '../utils/data';

const routes = express.Router();

routes.get('/', wrapAsync(async (req, res) => {
  res.send(data.lanches);
}));

export default routes;