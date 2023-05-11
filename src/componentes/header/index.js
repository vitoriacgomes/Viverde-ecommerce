import React from 'react'
import logo from "../../img/LOGO.png"

const Header = ({ onProdutosButtonClick }) => {
  return (
    <div>
      <header className="header">
        <div className="container">
            <img className='logo-header' src={logo} width={150}/>
            <nav className="nav md:ml-auto md:mr-auto">
                <a className="navbar mr-5 hover:text--900 ">Home</a>
                <button className="navbar mr-5 hover:text-900" onClick={onProdutosButtonClick}>Catálogo</button>
                <a className="navbar mr-5 hover:text-900">Carrinho</a>
                <a className="navbar mr-5 hover:text-900">Contato</a>
            </nav>
            <button className="btn-2"> Login </button>
            <button className="btn"> Cadastre-se
                <svg className='btn-1' fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>
        </header>
    </div>
  )
}

export default Header
