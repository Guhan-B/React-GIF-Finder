import React, { Component } from 'react';

import Layout from '../components/Layout/Layout';
import SearchBar from '../components/SearchBar/SearchBar';
import GifGrid from '../components/GifGrid/GifGrid';

class App extends Component {
  render() {
    return (
      <Layout>
        <SearchBar />
        <GifGrid />
      </Layout>
    );
  }
}

export default App;
