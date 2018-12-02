import React from 'react';
import PropTypes from 'prop-types';

import Pedido from './Pedido';
import Lanches from '../Lanches';

import styles from './index.css';

const Pedidos = (props) => (
  <section className={styles.pedidos}>
    <p> Escolha seus ingredientes: </p>
  
    { 
      props.ingredientes && props.ingredientes.map((ingrediente, index) => {
        return <Pedido 
          label={ingrediente.nome}
          disabled={ingrediente.quantidade <= 0 }
          add={() => props.add(ingrediente.nome)}
          remove={() => props.remove(ingrediente.nome)}
          key={index}
        />
      })
    }

    <p> Escolha seus ingredientes: </p>

    <div className={styles.lanches}>
    {
      props.lanches && props.lanches.map((lanches, index) => {
        return <Lanches
          key={index}
          nome={lanches.nome}
          lancheHandler={() => props.lancheHandler(lanches)}
        />
      })
    }          
    </div>

    <p> Faça seu pedido: </p>
    <div className={styles.orcar}>
      <input type="text" placeholder="Digite seu nome" />
      <button>
        Peça
      </button>
    </div>
  </section>
);

Pedidos.defaultProps = {
  ingredientes: [],
};

Pedidos.propTypes = {
  ingredientes: PropTypes.array.isRequired,
};

export default Pedidos;