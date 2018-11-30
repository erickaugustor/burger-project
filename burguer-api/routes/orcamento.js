import express from 'express';

import wrapAsync from '../middlewares/wrapAsync';
import validateOrcamento from '../validations/orcamento';
import promocoesLimite from '../services/promocoes';
import descontoLight from '../services/desconto';

import data from '../utils/data';

const routes = express.Router();

routes.post('/', wrapAsync(async (req, res) => {
  const { ingredientes } = data;
  const { pedido } = req.body;
  const limiteDaPromocao = 3;

  let ingredientesPedidos = [];
  let ingredientesDaPromocao = [];
  let valorPagar = 0;
  let descontoTotal = 0;

  let relatorioFinal;

  const { error } = validateOrcamento(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  pedido.forEach((itemPedido) => {
    let quantidadeItem = itemPedido.quantidade;

    const infoIngredientes = ingredientes.find(ingrediente => {
      return ingrediente.nome === itemPedido.nome ? ingrediente.valor : false;
    });

    ingredientesPedidos.push(itemPedido.nome);

    if (infoIngredientes.promocao) {
      let quantidadeParaPagar = promocoesLimite(quantidadeItem, limiteDaPromocao);
      let valorDescontoItem = (quantidadeItem - quantidadeParaPagar) * infoIngredientes.valor;

      ingredientesDaPromocao.push(itemPedido.nome);
      descontoTotal = descontoTotal + valorDescontoItem;
      quantidadeItem = quantidadeParaPagar;
    };

    if (infoIngredientes) {
      valorPagar = valorPagar + (infoIngredientes.valor * quantidadeItem);
    };
  });

  let desconto = descontoLight(ingredientesPedidos);

  if (desconto != 1) {
    ingredientesDaPromocao.push('fit');
    descontoTotal = descontoTotal + ((1 - desconto) * valorPagar);
    valorPagar = valorPagar * desconto;
  }

  relatorioFinal = {
    "promocoes": ingredientesDaPromocao,
    "total": valorPagar + descontoTotal,
    "desconto": descontoTotal.toFixed(2),
    "pagar": valorPagar,
  }

  res.send(relatorioFinal);
}));

export default routes;