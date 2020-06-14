import React from 'react';
import './custom-tachyons.css';
import 'tachyons';
import Header from './components/main/Header';
import AppRouter from './components/main/AppRouter';
import Footer from './components/main/Footer';

export default function App() {
  return (
    <article className="bg-light-gray opensans min-vh-100">
      <Header />
      <AppRouter />
      <Footer />
    </article>
  );
}
