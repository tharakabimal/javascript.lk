import React from 'react';
import Head from 'next/head';
import Footer from './footer';
import Header from './header';

type Props = {
    // eslint-disable-next-line no-undef
    children: JSX.Element;
};

const Layout = ({ children }: Props) => (
    <div>
        <Head>
            <title>JavaScript.lk</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div>{children}</div>
        <Footer />
    </div>
);

export default Layout;
