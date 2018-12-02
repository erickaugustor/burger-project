import request from 'superagent';

import endpoint from './apiEndpoint';

const getIngredientes = async () => {
  return await request
    .get(endpoint.ingredientes)
    .then(data => data.body)
    .catch(err => err);
};

const getLanches = async () => {
  return await request
    .get(endpoint.lanches)
    .then(data => data.body)
    .catch(err => err);
}


export {
  getIngredientes,
  getLanches,
};