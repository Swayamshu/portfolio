import React from 'react';
import Head from "next/head";
import { Navbar, Footer } from '.';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Head>
                <title>Swayamshu Swain</title>
                <link href="http://fonts.cdnfonts.com/css/montserrat" rel="stylesheet"/>
                <link href="http://fonts.cdnfonts.com/css/avone" rel="stylesheet"/>
                <link href="http://fonts.cdnfonts.com/css/proxima-nova" rel="stylesheet"/>
            </Head>

            <header>
                <Navbar />
            </header>

            <main className="main-container">
                {children}
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout
