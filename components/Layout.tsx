import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => (
  <div className="container">
    <Head>
      <title>agency.house</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
    </Head>
    <Header />
    {children}

    <Footer />
  </div>
);

export default Layout;
