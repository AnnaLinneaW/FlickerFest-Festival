// MyLayout.tsx
import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './globals.css';

interface MyLayoutProps {
  children: ReactNode;
}

const MyLayout: React.FC<MyLayoutProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/logo-74.svg" />
        <title>FlickerFest Festival</title>
      </Head>
      <Header />
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default MyLayout;
