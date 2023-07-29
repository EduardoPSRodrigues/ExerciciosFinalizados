import { regexEmail, regexTelefone } from "../Utilitários/regex.js";

// Pegar todas as variáveis do HTML
  const formularioCadastro = document.getElementById("formulario-Cadastro");
  const nomeCompleto = document.getElementById("campo-nomeCompleto");
  const email = document.getElementById("campo-email");
  const telefone = document.getElementById("campo-telefone");
  const nomeUsuario = document.getElementById("campo-nomeUsuario");
  const senha = document.getElementById("campo-senha");
  const erroNome = document.getElementById("erro-nome");
  const erroEmail = document.getElementById("erro-email");
  const erroTelefone = document.getElementById("erro-telefone");
  const erroNomeUsuario = document.getElementById("erro-nomeUsuario");
  const erroSenha = document.getElementById("erro-senha");
  const loginButton = document.getElementById("login-button");

formularioCadastro.addEventListener("submit", fazerCadastro);

function fazerCadastro(evento) {
  evento.preventDefault();

  // Função para limpar os erros do formulário
  resetErroFormulario();

  if (nomeCompleto.value === "") {
    nomeCompleto.classList.add("input-error");
    nomeCompleto.focus();
    erroNome.hidden = false;
    erroNome.innerText = "O nome é obrigatório";
  } else if (regexEmail.test(email.value) === false) {
  /* Começo com o nome escondido e caso caia nesse if o campo irá aparecer */
    email.classList.add("input-error");
    email.focus();
    erroEmail.hidden = false;
    erroEmail.innerText = "Digite um e-mail válido";
  } else if (regexTelefone.test(telefone.value) === false) {
    telefone.classList.add("input-error");
    telefone.focus();
    erroTelefone.hidden = false;
    erroTelefone.innerText = "Digite um telefone válido";
  } else if (nomeUsuario.value === "") {
    nomeUsuario.classList.add("input-error");
    nomeUsuario.focus();
    erroNomeUsuario.hidden = false;
    erroNomeUsuario.innerText = "O nome do usuário é obrigatório";
  } else if (senha.value.length < 8) {
  /* LENGHT se a constiável senha tiver menos que 9 caracteres, aparece um erro */
    senha.classList.add("input-error");
    senha.focus();
    erroSenha.hidden = false;
    erroSenha.innerText = "A senha precisa ter no mínimo 8 caracteres";
  } else {
    loginButton.disabled = true;
    loginButton.style.opacity = 0.5;
    loginButton.innerText = "Logando...";

    //Cadastrar os dados
    fetch('http://localhost:3333/usuarios', {
      method: 'POST',
      body: JSON.stringify ({
        nomeCompleto: nomeCompleto.value, 
        email: email.value,
        telefone: telefone.value,
        nomeUsuario: nomeUsuario.value,
        senha: senha.value
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
}

function resetErroFormulario() {
  /* Colocar um reset no input error (vinculado as bordas) */
  nomeCompleto.classList.remove("input-error");
  email.classList.remove("input-error");
  telefone.classList.remove("input-error");
  nomeUsuario.classList.remove("input-error");
  senha.classList.remove("input-error");

  /* Colocar um reset no erro-nome (vinculado as mensagens de erro) */
  erroNome.hidden = true;
  erroEmail.hidden = true;
  erroTelefone.hidden = true;
  erroNomeUsuario.hidden = true;
  erroSenha.hidden = true;
}

/* Informações do projeto:
* window.location.href=""; - Pedir para o Java enviar para outra página, como se fosse a função "a" do HTML
* Em relação ao fecth, existem algumas requisições como:
  GET: lista várias informações de um recurso como: produto, usuários, post. O retorno é em objeto ou um array de objeto.
  Post: cadastrar um novo recurso
  Delete: deletar um produto específico
  Put: atualizar todos os campos de um recurso
  Patch: atualizar uma coisa especifica  





*/
