import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { Home } from './layouts/Home/Home';
import { SearchBooks } from './layouts/SearchBooks/SearchBooks';

export const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}

      <SearchBooks />
      <Footer />
    </div>
  );
}