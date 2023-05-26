import React, { useEffect } from 'react'
import titlec from "../../img/title-cadastro.png"

const Cadastro = () => {
    const handleSubmit = (event) => {
      event.preventDefault();
      
      const nome = document.getElementById('nome').value;
      const idade = document.getElementById('idade').value;
      const email = document.getElementById('email').value;

      
      // Lógica adicional para enviar os dados do formulário para o servidor
      console.log('Dados do formulário:', { nome, idade, email });
      
      // Lógica adicional, como redirecionar o usuário para outra página
      
      // Limpar os campos do formulário
      document.getElementById('nome').value = '';
      document.getElementById('idade').value = '';
      document.getElementById('email').value = '';
    };
  
    return (
      <div className="cadastro">
        <form onsubmit={handleSubmit}>
            <section className="text-gray-600 body-font relative">
                <div className="container-cadastro px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="title-fonte sm:text-4xl text-3xl mb-4 font-medium text-gray-900" >
                            <img className='title-img-cadastro ' src={titlec} />
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Preencha as informações a baixo, por favor.</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">

                            <div className=" p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="nome" className=" leading-7 text-sm text-600">Nome Completo:</label>
                                    <input className="input" type="text" id="nome" class="w-full bg-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="email" className="leading-7 text-sm text-600">E-mail</label>
                                    <input type="email" id="email" name="email" class="w-full bg-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="idade" className="leading-7 text-sm text-600">Idade:</label>
                                    <input input className="input" type="number" id="idade" required name="message" class="w-full bg-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>

                            <div class="p-2 w-full">
                                <button type="submit" className="btn-3 flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Enviar</button>
                            </div>
                            <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                <a class="text-500">viverde@gmail.com</a>
                                <p class="leading-normal my-5">Vitória de Santo Antão</p>
                                <span class="inline-flex">
                                    <a class="text-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a class="ml-4 text-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a class="ml-4 text-500">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                    </a>
                                    <a class="ml-4 text-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </form>
      </div>
      
    );
  };
  
  export default Cadastro;
  