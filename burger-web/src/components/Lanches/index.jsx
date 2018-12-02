import React from 'react';

const Lanches = (props) => (
  <div>
    <button onClick={props.lancheHandler}>
      { props.nome }
    </button>
  </div>
);

export default Lanches;