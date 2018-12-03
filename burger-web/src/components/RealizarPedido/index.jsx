import React, { Component } from 'react';

import styles from './index.css';

class RealizarPedido extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      nome: ''
    };
  }

  handleChange = (e) => {
    this.setState({ nome: e.target.value });
  }

  render() {
    console.log(this.state.nome === '')
    return (
      <div className={styles.orcar}>
        <input 
          type="text"
          placeholder={this.props.inputText}
          onChange={this.handleChange}
          value={this.state.text}
        />
        <button 
          className={styles.disabled}
          onClick={() => this.props.realizarPedido(this.state.nome)}
        >
          { this.props.tituloBotao }
        </button>
      </div>
    )
  }
};

export default RealizarPedido;