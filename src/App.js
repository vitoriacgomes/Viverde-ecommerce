import React, { useState } from 'react';
import './App.css';
import Header from './componentes/header';
import Home from './modulos/home';
import Produtos from './modulos/home/produtos';
import Hero from './componentes/hero';
import Footer from './componentes/Footer';
import GoogleLogin from 'react-google-login';

function App() {
  const responseGoogle = (response) => {
    console.log(response);
  };
  const [currentPage, setCurrentPage] = useState('home');

  function goToProdutos() {
    setCurrentPage('produtos');
  }

  function goToHome() {
    setCurrentPage('home');
  }

  return (
    <div>
      <GoogleLogin
        clientId="196785399714-9ivm5jat0du8q607h7sp2p5gk5a2iada.apps.googleusercontent.com"
        buttonText="Login com Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      <Header onHomeButtonClick={goToHome} onProdutosButtonClick={goToProdutos} />
      {currentPage === 'home' && <Home onProdutosButtonClick={goToProdutos} />}
      {currentPage === 'produtos' && <Produtos />}
      <Footer/>
    </div>
  );
}

export default App;
