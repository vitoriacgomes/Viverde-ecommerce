import React from 'react'
import art1 from "../../img/vegetais-art.png"
import logo from "../../img/logo-branca.png"

const Hero = ({ onProdutosButtonClick }) => {
  return (
    <div className='home'>
        <section className="section">
            <div className="container ">
                <div className="text-home lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-fonte sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    <img className='title-img' src={logo}/>
                    </h1>
                    <p className="text-p mb-8 leading-relaxed">
                    Viverde é uma empresa familiar que busca resgatar a agricultura de baixo impacto ambiental fornecendo produtos 100% orgânicos e saudáveis
                    Igual a natureza, a família é imprescindível e imperfeita mas também colorida e cheia de emoção
                    </p>
                    <div class="flex justify-center">
                        <button className="btn-home inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg">Saiba Mais</button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg" onClick={onProdutosButtonClick}>
                            Ver Produtos</button>
                    </div>
                </div>
                <div className="img-home lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src={art1} />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero;
