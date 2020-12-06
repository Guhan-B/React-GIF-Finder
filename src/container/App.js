import React, { Component } from 'react';

import Layout from '../components/Layout/Layout';

import GifContainer from './GifContainer/GifContainer';

class App extends Component {
  render() {
    return (
      <Layout>
        <GifContainer />
      </Layout>
    );
  }
}

export default App;
