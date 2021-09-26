import React from "react";
import Header from "~/components/layout/header.tsx";
import Footer from "~/components/layout/footer.tsx";
import Navbar from "~/components/layout/navbar.tsx";
import "https://raw.githubusercontent.com/tachyons-css/tachyons/master/css/tachyons.min.css";
import "~/style/custom_tachyons.css";

type AppProps = {
  Page: React.FC;
  pageProps: Record<string, unknown>;
};

export default function App({ Page, pageProps }: AppProps) {
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
        <Page {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
