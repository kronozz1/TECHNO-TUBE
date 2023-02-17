import { ApolloProvider } from "@apollo/client";
import client from "../client";
import Head from 'next/head'
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>TechnoTube</title>
    <link rel="icon" href="logo.png" type="image/favicon"/>
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps}  />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
