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
};

const postPedidoParaOrcar = async (pedido) => {
  return await request
    .post(endpoint.orcamento)
    .set({
      'Content-Type':'application/json'
    })
    .send(pedido)
    .then(data => data)
    .catch(err => err);
}


export {
  getIngredientes,
  getLanches,
  postPedidoParaOrcar,
};