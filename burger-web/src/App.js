import React, { Component } from 'react';

import Layout from './components/Layout';
import BuilderBurger from './containers/BuilderBurger';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BuilderBurger />
        </Layout>
      </div>
    );
  }
}

export default App;
