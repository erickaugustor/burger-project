import React, { Component } from 'react';
import { getIngredientes, getLanches, postPedidoParaOrcar } from '../../services/apiServices';

import style from './index.css';

import Burger from '../../components/Burger';
import Pedidos from '../../components/Pedidos';

class BuilderBurger extends Component {
  constructor (props) {
    super(props);
    this.state = {
      ingredientes: [],
      lanches: [],
      pedidoIngredientes: {},
    }
  }

  adicionarIngredientesHandler = (ingrediente) => {
    const quantidadeAntiga = this.state.pedidoIngredientes[ingrediente];
    const quantidadeAtual = quantidadeAntiga + 1;
    const pedido = {
      ...this.state.pedidoIngredientes
    };

    pedido[ingrediente] = quantidadeAtual;
    this.setState({pedidoIngredientes: pedido})
  };

  removerIngredientesHandler = (ingrediente) => {
    const quantidadeAntiga = this.state.pedidoIngredientes[ingrediente];
    const quantidadeAtual = quantidadeAntiga - 1;
    const pedido = {
      ...this.state.pedidoIngredientes
    };

    pedido[ingrediente] = quantidadeAtual;
    this.setState({pedidoIngredientes: pedido})
  };

  realizarPedidoHandler = () => {
    const { pedidoIngredientes } = this.state;
    const pedidoParaOrcar = {
      pedido: [],
    };

    for (let [ingrediente, quantidade] of Object.entries(pedidoIngredientes)) {
      pedidoParaOrcar.pedido.push({ nome: ingrediente, quantidade: quantidade });
    };

    postPedidoParaOrcar(pedidoParaOrcar);

  };

  lanchesProntosHandler = (lanche) => {
    const novosIngredientes = {};

    lanche.ingredientes.forEach(ingrediente => {
      novosIngredientes[ingrediente] = 1;
    });

    this.setState({ pedidoIngredientes: novosIngredientes });
  }

  componentDidMount() {
    getIngredientes()
      .then(items => {
        let pedidoIngredientes = {};
        items.forEach(item => pedidoIngredientes[item.nome] = 0);
        this.setState({ingredientes: items, pedidoIngredientes})
      })
      .catch(this.setState({ ingredientes: [] }));

    getLanches()
      .then(items => {
        this.setState({ lanches: items })
      })
      .catch(this.setState({ lanches: [] }));
  };

  render () {
    const { ingredientes, pedidoIngredientes, lanches } = this.state;
    
    return (
      <aside className={style.layout}>
        <Pedidos 
          ingredientes={ingredientes}
          lanches={lanches}
          realizarPedido={this.realizarPedidoHandler}
          add={this.adicionarIngredientesHandler}
          remove={this.removerIngredientesHandler}
          lancheHandler={this.lanchesProntosHandler}
        />
        <Burger 
          ingredientes={pedidoIngredientes}
        />
      </aside>
    );
  };
};

export default BuilderBurger;