import React from 'react';

import Ingredientes from './Ingredientes';

import classes from './index.css';

const Burger = (props) => {
  let ingredientes = [];

  for (let [ingrediente, quantidade] of Object.entries(props.ingredientes)) {
    if (quantidade) {
      for (let i=0; i<quantidade; i++) {
        ingredientes.push(<Ingredientes key={ingrediente + quantidade} type={ingrediente} />);
      }
    }
  };

  if (ingredientes.length === 0) {
    ingredientes = <p>Faça seu pedido!</p>;
  };
  
  return (
    <div className={classes.burger}>
      <Ingredientes type="pao-superior" />
      { ingredientes }
      <Ingredientes type="pao-inferior" />
    </div>
  );
};

export default Burger;