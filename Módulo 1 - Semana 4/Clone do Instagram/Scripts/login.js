function clicarNoBotao() {
  var email = document.getElementById("campo-email").value;
  var senha = document.getElementById("campo-senha").value;

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
  document.getElementById("campo-email").classList.remove("input-error")
  document.getElementById("campo-senha").classList.remove("input-error")

  if (email === "") {
    document.getElementById("campo-email").classList.add("input-error");
    /* Caso o campo do e-mail fique sem preencher, a borda do input irá mudar para vermelho */

    document.getElementById("campo-email").focus();
    /* Deixar o campo-email selecionado ao dar erro. */
  } else if (senha === "") {
    document.getElementById("campo-senha").classList.add("input-error");
    /* Caso o campo do e-mail fique sem preencher, a borda do input irá mudar para vermelho */
    document.getElementById("campo-senha").focus();
  } else{/* Função para deixar o button desabilitado até preencher os campos e para reduzir
  a opacidade. Trocar o texto dentro do button para logando.
  Só vai cair nessa parte do código quando o IF e o ELSE IF forem verdadeiros*/
  document.getElementById("login-button").disabled = true
  document.getElementById("login-button").style.opacity = 0.5
  document.getElementById("login-button").innerText = "Logando..."

  /* window.location.href=""; - Pedir para o Java enviar para outra página, como se 
  fosse a função "a" do HTML  */
  window.location.href="https://www.instagram.com/accounts/password/reset/";

  }


  
}
