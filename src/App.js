import React, { useState } from 'react';
import './App.css';
import Header from './componentes/header';
import Home from './modulos/home';
import Produtos from './modulos/home/produtos';
import Footer from './componentes/Footer';
import Cadastro from './componentes/header/cadastro';
import Hero from './componentes/hero';
import Contact from './componentes/Contact/contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  function goToProdutos() {
    setCurrentPage('produtos');
  }

  function goToHome() {
    setCurrentPage('home');
  }

  function goToCadatro () {
    setCurrentPage('cadastro');
  };

  function goToContact () {
    setCurrentPage('contact');
  };

  return (
    <div>
      <Header onHomeButtonClick={goToHome} onProdutosButtonClick={goToProdutos} onCadastroButtonClick={goToCadatro} onContactButtonClick={goToContact}/>
      {currentPage === 'home' && <Home onProdutosButtonClick={goToProdutos} />}
      {currentPage === 'produtos' && <Produtos />}
      {currentPage === 'cadastro' && <Cadastro />}
      {currentPage === 'contact' && <Contact />}
      <Footer/>
    </div>
  );
}

export default App;
