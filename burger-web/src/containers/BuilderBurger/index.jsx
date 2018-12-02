import React, { Component, Fragment } from 'react';
import { getIngredientes } from '../../services/apiServices';

import style from './index.css';

import Burger from '../../components/Burger';
import Pedidos from '../../components/Pedidos';

class BuilderBurger extends Component {
  constructor (props) {
    super(props);
    this.state = {
      ingredientes: [],
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

  componentDidMount() {
    getIngredientes()
      .then(items => {
        let pedidoIngredientes = {};
        items.forEach(item => pedidoIngredientes[item.nome] = 0);
        this.setState({ingredientes: items, pedidoIngredientes})
      })
      .catch(this.setState({ingredientes: []}));
  };

  render () {
    const { ingredientes, pedidoIngredientes } = this.state;
    
    return (
      <aside className={style.layout}>
        <Pedidos 
          ingredientes={ingredientes}
          add={this.adicionarIngredientesHandler}
          remove={this.removerIngredientesHandler}
        />
        <Burger ingredientes={pedidoIngredientes} />
      </aside>
    );
  };
};

export default BuilderBurger;