import React from 'react';
import Header from './Header';
import Card from './Card';
import Cards from './Cards';
import Footer from "./Footer";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Card cardId="6983839" />
      <Cards cardId="6983839" />
      <Footer />
    </div>
  );
}

export default App;
