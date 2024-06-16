import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './layouts/Home/ExploreTopBooks';
import { BookCarousel } from './layouts/Home/BookCarousel';
import { Heros } from './layouts/Home/Heros';

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
      <BookCarousel />
      <Heros />
    </div>
  );
}

export default App;
