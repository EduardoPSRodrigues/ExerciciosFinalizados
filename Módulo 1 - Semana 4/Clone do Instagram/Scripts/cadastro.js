function fazerCadastro() {
    
    var nomeCompleto = document.getElementById("campo-nomeCompleto").value;
    var email = document.getElementById("campo-email").value;
    var telefone = document.getElementById("campo-telefone").value;
    var nomeUsuario = document.getElementById("campo-nomeUsuario").value;
    var senha = document.getElementById("campo-senha").value;
  
    /* Colocar um reset no input error*/
    document.getElementById("campo-nomeCompleto").classList.remove("input-error")
    document.getElementById("campo-email").classList.remove("input-error")
    document.getElementById("campo-telefone").classList.remove("input-error")
    document.getElementById("campo-nomeUsuario").classList.remove("input-error")
    document.getElementById("campo-senha").classList.remove("input-error")
  
    if (nomeCompleto === "") {
      document.getElementById("campo-nomeCompleto").classList.add("input-error");
      document.getElementById("campo-nomeCompleto").focus();
      document.getElementById("erro-nome").hidden = false;
      document.getElementById("erro-nome").innerText = "O nome é obrigatório"
    } 
    /* Começo com o nome escondido e caso caia nesse if o campo irá aparecer */
    else if (email === "") {
        document.getElementById("campo-email").classList.add("input-error");
        document.getElementById("campo-email").focus(); 
    }
    else if (telefone === "") {
        document.getElementById("campo-telefone").classList.add("input-error");
        document.getElementById("campo-telefone").focus(); 
    }
    else if (nomeUsuario === "") {
        document.getElementById("campo-nomeUsuario").classList.add("input-error");
        document.getElementById("campo-nomeUsuario").focus(); 
    }
    /* LENGHT se a variável senha tiver menos que 9 caracteres, aparece um erro */
    else if (senha.length < 9) { 
      document.getElementById("campo-senha").classList.add("input-error");
      document.getElementById("campo-senha").focus();
      document.getElementById("erro-senha").hidden = false;
      document.getElementById("erro-senha").innerText = "A senha precisa ter no mínimo 8 caracteres"
    } else{
    document.getElementById("login-button").disabled = true
    document.getElementById("login-button").style.opacity = 0.5
    document.getElementById("login-button").innerText = "Logando..."
  
    /* window.location.href=""; - Pedir para o Java enviar para outra página, como se 
    fosse a função "a" do HTML  */
    window.location.href="https://www.instagram.com/accounts/password/reset/";
  
    }
  }