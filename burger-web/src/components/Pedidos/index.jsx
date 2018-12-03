import React from 'react';
import PropTypes from 'prop-types';

import Pedido from './Pedido';
import Lanches from '../Lanches';
import RealizarPedido from '../RealizarPedido';

import styles from './index.css';

const Pedidos = (props) => (
  <section className={styles.pedidos}>
    <h4> Escolha seus ingredientes: </h4>
  
    { 
      props.ingredientes && props.ingredientes.map((ingrediente, index) => {
        return <Pedido 
          nome={ingrediente.nome}
          valor={ingrediente.valor}
          desativado={ingrediente.quantidade <= 0 }
          add={() => props.add(ingrediente.nome)}
          remove={() => props.remove(ingrediente.nome)}
          key={index}
        />
      })
    }

    <h4> Prefere escolher um dos nossos lanches já prontos? </h4>

    <div className={styles.lanches}>
    {
      props.lanches && props.lanches.map((lanches, index) => {
        return <Lanches
          key={index}
          nome={lanches.nome}
          lanchesProntos={() => props.lanchesProntos(lanches)}
        />
      })
    }          
    </div>

    <h4> Faça seu pedido: </h4>
    
    <RealizarPedido 
      inputText="Digite seu nome"
      realizarPedido={props.realizarPedido}
      tituloBotao="Peça!"
    />
  </section>
);

Pedidos.defaultProps = {
  ingredientes: [],
};

Pedidos.propTypes = {
  ingredientes: PropTypes.array.isRequired,
};

export default Pedidos;