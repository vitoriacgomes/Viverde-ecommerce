import React, { useState } from 'react';
import './App.css';
import Header from './componentes/header';
import Home from './modulos/home';
import Produtos from './modulos/home/produtos';
import Footer from './componentes/Footer';
import Cadastro from './componentes/header/cadastro';
import Contact from './componentes/Contact/contact';
import Sobre from './componentes/Sobre/sobre';

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

  function goToSobre () {
    setCurrentPage('sobre');
  };

  return (
    <div>
      <Header 
        onHomeButtonClick={goToHome} 
        onProdutosButtonClick={goToProdutos} 
        onCadastroButtonClick={goToCadatro} 
        onContactButtonClick={goToContact} 
        onSobreButtonClick={goToSobre}
      />
      {currentPage === 'home' && <Home onProdutosButtonClick={goToProdutos} /> }
      {currentPage === 'produtos' && <Produtos />}
      {currentPage === 'cadastro' && <Cadastro />}
      {currentPage === 'contact' && <Contact />}
      {currentPage === 'sobre' && <Sobre />}
      <Footer/>
    </div>
  );
}

export default App;
