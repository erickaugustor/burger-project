import React from 'react';

import style from './index.css';

const Lanches = (props) => (
  <div>
    <button 
      className={style.menos}
    >
      {props.nome}
    </button>
  </div>
);

export default Lanches;