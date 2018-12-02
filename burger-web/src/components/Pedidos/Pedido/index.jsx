import React from 'react';

import style from './index.css';

const Pedido = (props) => (
  <div className={style.content}>
    <div className={style.text}> {props.label.charAt(0).toUpperCase() + props.label.slice(1)} </div>
    <button 
      className={style.menos}
      onClick={props.remove}
      disabled={props.disabled}>
     -
    </button>
    <button 
      className={style.mais} 
      onClick={props.add}>
    +
    </button>
  </div>
);

export default Pedido;