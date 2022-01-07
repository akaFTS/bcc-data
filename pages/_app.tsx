import React from 'react';
import Header from 'components/layout/header';
import Footer from 'components/layout/footer';
import Navbar from 'components/layout/navbar';
import 'style/tachyons.css';
import 'style/custom_tachyons.css';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-light-gray opensans min-vh-100">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </head>
      <Header />
      <main className="w-100 w-80-l center ph2 ph0-l">
        <Navbar />
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
