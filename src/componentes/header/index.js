import React, { useState } from 'react';
import logo from "../../img/LOGO.png"

const Header = ({ onProdutosButtonClick, onHomeButtonClick, onCadastroButtonClick, onContactButtonClick, onSobreButtonClick }) => {

  return (
    <div>
      <header className="header">
        <div className="container">
          <img className='logo-header' src={logo} width={150} />
          <nav className="nav md:ml-auto md:mr-auto">
            <button className="navbar mr-5 hover:text--900" onClick={onHomeButtonClick}>Home</button>
            <button className="navbar mr-5 hover:text-900" onClick={onProdutosButtonClick}>Catálogo</button>
            <button className="navbar mr-5 hover:text-900" onClick={onSobreButtonClick}>Sobre</button>
            <button className="navbar mr-5 hover:text-900" onClick={onContactButtonClick}>Contato</button>
          </nav>
          <button className="btn" onClick={onCadastroButtonClick}>
            Cadastre-se
            <svg className='btn-1' fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;

