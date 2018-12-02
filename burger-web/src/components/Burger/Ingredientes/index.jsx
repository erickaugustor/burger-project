import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './index.css';

class Ingredientes extends Component {
  render() {
    let ingrediente = null;
  
    switch (this.props.type) {
      case('pao-superior'):
        ingrediente = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        )
        break;
      case('hamburguer'):
        ingrediente = <div className={classes.Hamburguer}></div>;
        break;
      case('queijo'):
        ingrediente = <div className={classes.Queijo}></div>;
        break;
      case('bacon'):
        ingrediente = <div className={classes.Bacon}></div>;
        break;
      case('alface'):
        ingrediente = <div className={classes.Alface}></div>;
        break;
      case('ovo'):
        ingrediente = <div className={classes.Ovo}></div>;
        break;
      case('pao-inferior'):
        ingrediente = <div className={classes.BreadBottom}></div>
        break;
      default: 
        ingrediente = null;
    }

    return ingrediente;
  };
};

Ingredientes.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Ingredientes;