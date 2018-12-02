import React, { Fragment } from 'react';

import Pedido from './Pedido';

import styles from './index.css';

const Pedidos = (props) => (
  <section className={styles.pedidos}>
    { props.ingredientes.map(ingrediente => {
      return <Pedido 
        label={ingrediente.nome}
        add={() => props.add(ingrediente.nome)}
        remove={() => props.remove(ingrediente.nome)}
      />
    })}
  </section>
);

export default Pedidos;