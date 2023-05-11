import React from 'react'
import Hero from '../../componentes/hero'

const Home = ({ onProdutosButtonClick }) => {
  return (
    <div>
      <Hero onProdutosButtonClick={onProdutosButtonClick}/>
    </div>
  )
}

export default Home;
