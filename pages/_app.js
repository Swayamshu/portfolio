import '../styles/globals.css'
import React from 'react';

import { Layout } from "../components/index";
import { StateContext } from "../context/StateContext";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
