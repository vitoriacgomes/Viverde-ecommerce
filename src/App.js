import React, { useState } from 'react';
import './App.css';
import Header from './componentes/header';
import Home from './modulos/home';
import Produtos from './modulos/home/produtos';
import Hero from './componentes/hero';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  function goToProdutos() {
    setCurrentPage('produtos');
  }
  function goToHomePage() {
    setCurrentPage('home');
  }

  return (
    <div>
      <Header onProdutosButtonClick={goToProdutos}/>
      {currentPage === 'home' ? (
        <Home onProdutosButtonClick={goToProdutos}/>
      ) : (
        <Produtos />
      )}
      {currentPage === 'produtos' && (
        <Hero onProdutosButtonClick={goToHomePage} />
      )}
    </div>
  );
}

export default App;
