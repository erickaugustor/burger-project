import React from 'react';

import style from './index.css';

const botaoMenos = (props, desativado) => {
  if (desativado) {
    return (
      <button
        className={style.desativado}
        onClick={props.remove}
      >
      -
      </button>
    )
  }

  return (
    <button 
      className={style.menos}
      onClick={props.remove}
    >
    -
    </button>
  )
}

const Pedido = (props) => (
  <div className={style.content}>
    <div className={`${style.text} ${style.ingrediente}`}> {props.nome.charAt(0).toUpperCase() + props.nome.slice(1) + ':'} </div>
    <div className={style.text}> R$ {props.valor} </div>


    {
      botaoMenos(props, props.desativado)
    }
    <button 
      className={style.mais} 
      onClick={props.add}>
    +
    </button>
  </div>
);

export default Pedido;