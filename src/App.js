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

  function goToHome() {
    setCurrentPage('home');
  }

  return (
    <div>
      <Header onHomeButtonClick={goToHome} onProdutosButtonClick={goToProdutos} />
      {currentPage === 'home' && <Home onProdutosButtonClick={goToProdutos} />}
      {currentPage === 'produtos' && <Produtos />}
    </div>
  );
}

export default App;
