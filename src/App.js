import React, { useState } from 'react';
import './App.css';
import Header from './componentes/header';
import Home from './modulos/home';
import Produtos from './modulos/home/produtos';
import Hero from './componentes/hero';

function App() {
  const [currentPage, setCurrent] = useState('home');

  function goToProdutos() {
    setCurrent('produtos');
  }
  function goToHome() {
    setCurrent('home');
  }

  return (
    <div>
      <Header onProdutosButtonClick={goToProdutos}
      onHomeButtonClick={goToHome}/>
      {currentPage === 'home' ? (
      <Home onProdutosButtonClick={goToProdutos}/>
      ) : (
        <Produtos />
      )}
      {currentPage === 'produtos' && (
      <Hero onProdutosButtonClick={goToHome} />
      )}
    </div>
  );
}

export default App;
