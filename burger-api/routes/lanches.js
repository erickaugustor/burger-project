import express from 'express';

import wrapAsync from '../middlewares/wrapAsync';
import validateLanches from '../validations/lanches';

import * as data from '../utils/data.json';

const routes = express.Router();

routes.get('/', wrapAsync(async (req, res) => {
  res.send(data.lanches);
}));

routes.post('/', wrapAsync(async (req, res) => {
  const { lanches } = data;

  const { error } = validateLanches(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const hasEqual = lanches.filter(lanche => lanche.nome === req.body.nome);
  if (hasEqual) return res.status(400).send('Has an equal');

  data.lanches.push(req.body);
  if(!postDataJSON(data)) return res.status(500).send('Couldnt save');

  res.send(data.ingredientes);
}));

export default routes;