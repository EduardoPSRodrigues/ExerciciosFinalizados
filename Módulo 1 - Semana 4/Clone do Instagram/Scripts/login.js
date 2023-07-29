import { usuarios } from "../Constantes/usuarios.js";

const campoEmail = document.getElementById("campo-email");
const campoSenha = document.getElementById("campo-senha");
const loginButton = document.getElementById("login-button");
const esqueceuSenha = document.getElementById("esqueceu-senha");
const imagemCarregando = document.getElementById("imagem-carregando");
const msgErroEmail = document.getElementById("erro-email");
const msgErroSenha = document.getElementById("erro-senha");
const botaoLogin = document.getElementById("form-login");

botaoLogin.addEventListener("submit", realizarLogin);

function realizarLogin(evento) {
  evento.preventDefault();

  const email = campoEmail.value;
  const senha = campoSenha.value;

  /* document é um elemento que contempla toda a minha página, então esta falando para
    ir no HTML e pegar um elemento pela ID dele */

  console.log(email);
  console.log(senha);

  /* Verificar se o e-mail foi preenchido, pois é campo obrigatório.
  Sinônimos = (!email) =  (email === "") 
  Verificar se é igual usa-se === e diferente usa-se "==
  
  document.getElementById("campo-email").style = "border-color: red" é sinônimo
  document.getElementById("campo-email").style.borderColor = "red"
  Lembrando que no primeiro exemplo eu consigo colocar mais configurações,
  desde que eu coloque ponto e virgula depois do RED e dentro das aspas
  Posso também criar uma CLASSE de ERROR no CSS e vincular no Java com o comando
  document.getElementById("campo-email").classList.add("input-error")

  */

  /* Se quiser mostrar todos os itens vermelhos, deixo tudo IF separado, mas 
  se quero mostrar os erros de forma unitária e por ordem, uso o if, else if... */

  /* Colocar um reset no input error, se estiver algum erro, vai passar pelos IF
  e a borda vai ficar em vermelho.
  
    Função para limpar os erros do formulário*/

  resetErroFormulario();

  if (email === "") {
    campoEmail.classList.add("input-error");
    /* Caso o campo do e-mail fique sem preencher, a borda do input irá mudar para vermelho */
    campoEmail.focus();
    /* Deixar o campo-email selecionado ao dar erro. */
    msgErroEmail.hidden = false;
    msgErroEmail.innerText = "Digite um e-mail válido";
  } else if (senha === "") {
    campoSenha.classList.add("input-error");
    /* Caso o campo do e-mail fique sem preencher, a borda do input irá mudar para vermelho */
    campoSenha.focus();
    msgErroSenha.hidden = false;
    msgErroSenha.innerText = "Senha incorreta.";
  } else {
    /* Função para deixar o button desabilitado até preencher os campos e para reduzir
  a opacidade. Trocar o texto dentro do button para logando.
  Só vai cair nessa parte do código quando o IF e o ELSE IF forem verdadeiros*/

    loginButton.disabled = true;
    loginButton.style.opacity = 0.5;
    loginButton.innerText = "Logando...";

    //Verifica o email e a senha digitado no banco de dados, mas o find não armazena dados
    //por isso é preciso criar uma variável para armazenar essa informação encontrada
    //se a função find não encontrar um valor, o resultado é undefined, logo com a função if é falso.

    //const usuariosEncontrado = usuarios.find((usuario) => usuario.email === email && usuario.senha === senha)
    // Equivalente
    const usuariosEncontrado = usuarios.find((usuario) => {
      return usuario.email === email && usuario.senha === senha;
    });

    if (usuariosEncontrado) {
      // salvou uma infomação no local storage, salvou joao na chave de acesso nomeUsuario
      localStorage.setItem("nomeUsuario", usuariosEncontrado.nome);

      campoEmail.style.display = "none";
      campoSenha.style.display = "none";
      loginButton.style.display = "none";
      esqueceuSenha.style.display = "none";

      imagemCarregando.hidden = false;

      const img = document.createElement("img");
      img.setAttribute(
        "src",
        "https://sulmak.com.br/wp-content/uploads/2016/12/1285541001-gif-carregando-cocacolazerrooo.gif"
      ); //Ir na imagem e setar o atributo SRC e falando para colocar a informação da url

      imagemCarregando.appendChild(img); //Jogar os elementos da img no id lista

      //Função responsável por redicionar a página após 3 segundos, cada segundo corresponde a 1000
      setTimeout(() => {
        /* window.location.href=""; - Pedir para o Java enviar para outra página, como se 
      fosse a função "a" do HTML  */
        window.location.href = "./home.html";
      }, 2000);
    } else {
      //Resetar o botão.
      loginButton.disabled = false;
      loginButton.style.opacity = 1;
      loginButton.innerText = "Entrar";

      alert("Usuário não cadastrado.");
    }
  }
}

function resetErroFormulario() {
  /* Colocar um reset no input error (vinculado as bordas) */
  campoEmail.classList.remove("input-error");
  campoSenha.classList.remove("input-error");

  /* Colocar um reset no erro-nome (vinculado as mensagens de erro) */
  msgErroEmail.hidden = true;
  msgErroSenha.hidden = true;
}
