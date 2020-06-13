import React, { Component } from 'react';
import '../custom-tachyons.css';
import 'tachyons';
import Header from './Header';
import AppRouter from './AppRouter';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <article className="bg-light-gray opensans min-vh-100">
        <Header />
        <AppRouter />
        <Footer />
      </article>
    );
  }
}

export default App;
