import React from 'react';

import Ingredientes from './Ingredientes';

import classes from './index.css';

const Burger = (props) => {
  let ingredientes = [];

  for (let [ingrediente, quantidade] of Object.entries(props.ingredientes)) {
    if (quantidade >= 0) {
      for (let index=0; index < quantidade; index++) {
        ingredientes.push(<Ingredientes key={ingrediente + index} type={ingrediente} />);
      };
    };
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