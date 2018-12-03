import React from 'react';

const Lanches = (props) => (
  <div>
    <button onClick={props.lanchesProntos}>
      { props.nome }
    </button>
  </div>
);

export default Lanches;