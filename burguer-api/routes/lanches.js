import express from 'express';

import wrapAsync from '../middlewares/wrapAsync';
import validateLanches from '../validations/lanches';

import data from '../utils/data';

const routes = express.Router();

routes.get('/', wrapAsync(async (req, res) => {
  res.send(data.lanches);
}));

routes.post('/', wrapAsync(async (req, res) => {
  const { error } = validateLanches(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Verify duplicates values before push

  data.lanches.push(req.body);
  res.send(data.ingredientes);
}));

export default routes;