import express from 'express';

import wrapAsync from '../middlewares/wrapAsync';
import validateIngredientes from '../validations/ingredientes';
import { postDataJSON } from '../services/apiServices';

import * as data from '../utils/data.json';

const routes = express.Router();

routes.get('/', wrapAsync(async (req, res) => {
  res.send(data.ingredientes);
}));

routes.post('/', wrapAsync(async (req, res) => {
  const { ingredientes } = data;

  const { error } = validateIngredientes(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  
  const hasEqual = ingredientes.filter(ingrediente => ingrediente.nome === req.body.nome);
  if (!hasEqual) return res.status(400).send('Has an equal');

  data.ingredientes.push(req.body);
  if(!postDataJSON(data)) return res.status(500).send('Couldnt save');

  res.send(data.ingredientes);
}));

export default routes;