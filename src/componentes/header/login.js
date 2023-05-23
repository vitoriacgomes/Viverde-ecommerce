import React from "react";

const Cadastro = () => {
    const handleSubmit = (event) => {
      event.preventDefault();
      
      const nome = document.getElementById('nome').value;
      const idade = document.getElementById('idade').value;
      const email = document.getElementById('email').value;
      
      // Verificação dos campos
      if (nome === '') {
        alert('Por favor, preencha o campo Nome.');
        return;
      }
      
      if (idade === '') {
        alert('Por favor, preencha o campo Idade.');
        return;
      }
      
      if (email === '') {
        alert('Por favor, preencha o campo Email.');
        return;
      }
      
      // Lógica adicional para enviar os dados do formulário para o servidor
      console.log('Dados do formulário:', { nome, idade, email });
      
      // Lógica adicional, como redirecionar o usuário para outra página
      
      // Limpar os campos do formulário
      document.getElementById('nome').value = '';
      document.getElementById('idade').value = '';
      document.getElementById('email').value = '';
    };
  
    return (
      <div>
        <h2>Cadastro</h2>
        <form onsubmit="handleSubmit(event)">
          <div>
            <label for="nome">Nome:</label>
            <input type="text" id="nome" required />
          </div>
          <div>
            <label for="idade">Idade:</label>
            <input type="number" id="idade" required />
          </div>
          <div>
            <label for="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  };
  
  export default Cadastro;
  