import { usuarios } from "../Constantes/usuarios.js";

const botaoLogin = document.getElementById("form-login");
botaoLogin.addEventListener('submit', realizarLogin)

function realizarLogin(evento) {
  evento.preventDefault()

  const email = document.getElementById("campo-email").value;
  const senha = document.getElementById("campo-senha").value;

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
  e a borda vai ficar em vermelho */
  document.getElementById("campo-email").classList.remove("input-error");
  document.getElementById("campo-senha").classList.remove("input-error");

      // Função para limpar os erros do formulário
      resetErroFormulario()

  if (email === "") {
    document.getElementById("campo-email").classList.add("input-error");
    /* Caso o campo do e-mail fique sem preencher, a borda do input irá mudar para vermelho */
    document.getElementById("campo-email").focus();
    /* Deixar o campo-email selecionado ao dar erro. */
    document.getElementById("erro-email").hidden = false;
    document.getElementById("erro-email").innerText = "Digite um e-mail válido"
    
  } else if (senha === "") {
    document.getElementById("campo-senha").classList.add("input-error");
    /* Caso o campo do e-mail fique sem preencher, a borda do input irá mudar para vermelho */
    document.getElementById("campo-senha").focus();
    document.getElementById("erro-senha").hidden = false;
    document.getElementById("erro-senha").innerText = "Senha incorreta."
 
  } else {
    /* Função para deixar o button desabilitado até preencher os campos e para reduzir
  a opacidade. Trocar o texto dentro do button para logando.
  Só vai cair nessa parte do código quando o IF e o ELSE IF forem verdadeiros*/

    document.getElementById("login-button").disabled = true;
    document.getElementById("login-button").style.opacity = 0.5;
    document.getElementById("login-button").innerText = "Logando...";

    //Verifica o email e a senha digitado no banco de dados, mas o find não armazena dados
    //por isso é preciso criar uma variável para armazenar essa informação encontrada
    //se a função find não encontrar um valor, o resultado é undefined, logo com a função if é falso.

    //const usuariosEncontrado = usuarios.find((usuario) => usuario.email === email && usuario.senha === senha)
    // Equivalente
    const usuariosEncontrado = usuarios.find((usuario) => {
      return usuario.email === email && usuario.senha === senha;
    });

    if (usuariosEncontrado) {
      /* window.location.href=""; - Pedir para o Java enviar para outra página, como se 
      fosse a função "a" do HTML  */
      window.location.href = "./home.html";
    } else {
      //Resetar o botão.
      document.getElementById("login-button").disabled = false;
      document.getElementById("login-button").style.opacity = 1;
      document.getElementById("login-button").innerText = "Entrar";

      alert("Usuário não cadastrado.");
      
    }
  }
}

function resetErroFormulario() {
  /* Colocar um reset no input error (vinculado as bordas) */
  document.getElementById("campo-email").classList.remove("input-error")
  document.getElementById("campo-senha").classList.remove("input-error")
  
  /* Colocar um reset no erro-nome (vinculado as mensagens de erro) */
  document.getElementById("erro-email").hidden = true;
  document.getElementById("erro-senha").hidden = true;
  }