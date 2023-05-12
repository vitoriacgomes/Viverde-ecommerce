import React, { useEffect } from 'react'
import titlep from "../../../img/title-produtos.png"
import alfacef from '../../../img/alface.png'
import pimentaoama from '../../../img/pimentao-amarelo.png'
import pimenta1 from '../../../img/pimenta-dedo.png'
import cebolar from '../../../img/cebola-roxa.png'
import beringela from '../../../img/beringela.png'
import couveflor from '../../../img/couve-flor.png'
import cenoura from '../../../img/cenoura.png'
import tomate from '../../../img/tomate.png'

const Produtos = () => {
    return (
        <div className='produtos'>
            <section class="section-produtos">
                <div class="container px-5 py-24 mx-auto">
                    <div class="col-1 flex flex-wrap -m-4">
                        <h1 className="title-fonte sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            <img className='title-img-produtos ' src={titlep} />
                        </h1>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={alfacef} />
                            </a>
                            <div class="mt-4">
                                <h3 class="categoria-prod tracking-widest title-font mb-1">HORTALIÇAS</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Alface Americana</h2>
                                <p class="mt-1">R$8.00 und.</p>
                            </div>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={pimentaoama} />
                            </a>
                            <div class="mt-4">
                                <h3 class="categoria-prod tracking-widest title-font mb-1">HORTALIÇAS</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Pimentão Amarelo</h2>
                                <p class="mt-1">R$ 7.00 und.</p>
                            </div>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={pimenta1} />
                            </a>
                            <div class="mt-4">
                                <h3 class="categoria-prod tracking-widest title-font mb-1">PIMENTAS</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Pimenta Dedo de Moça</h2>
                                <p class="mt-1">$10.00 gramas</p>
                            </div>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={cebolar} />
                            </a>
                            <div class="mt-4">
                                <h3 class="categoria-prod tracking-widest title-font mb-1">HORTALIÇAS</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Cebola Roxa</h2>
                                <p class="mt-1">R$10.00 kg</p>
                            </div>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={beringela} />
                            </a>
                            <div class="mt-4">
                                <h3 class="categoria-prod tracking-widest title-font mb-1">HORTALIÇAS</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Beringela</h2>
                                <p class="mt-1">R$6.00 und.</p>
                            </div>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={couveflor}/>
                            </a>
                            <div class="mt-4">
                                <h3 class="categoria-prod tracking-widest title-font mb-1">HORTALIÇAS</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Couve-Flor</h2>
                                <p class="mt-1">R$10.00 unid</p>
                            </div>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={cenoura} />
                            </a>
                            <div class="mt-4">
                                <h3 class="categoria-prod tracking-widest title-font mb-1">HORTALIÇAS</h3>
                                <h2 class="text-900 title-font text-lg font-medium">Cenoura</h2>
                                <p class="mt-1">R$12.00 kg</p>
                            </div>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={tomate} />
                            </a>
                            <div class="mt-4">
                                <h3 class="categoria-prod tracking-widest title-font mb-1">HORTALIÇAS</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Tomate</h2>
                                <p class="mt-1">R$8.00 kg</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
  )
}

export default Produtos
