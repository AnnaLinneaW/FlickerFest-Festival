// MyLayout.tsx
import React, { ReactNode } from 'react';
import { Metadata } from 'next';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './globals.css';

interface MyLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'FlickerFest Festival',
  description: 'FlickerFest Festival',
};

const MyLayout: React.FC<MyLayoutProps> = ({ children }) => {
  return (
    <div>
      <>
        <link rel="icon" href="/logo-74.svg" />
        <title>FlickerFest Festival</title>
      </>
      <Header />
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default MyLayout;
