function clicarNoBotao() {
  // Seleciona todos os elementos que precisa manipular
  var idade = document.getElementById("campo-idade").value;
  var inputIdade = document.querySelector("#campo-idade");
  var botaoClassificar = document.querySelector("#login-button");
  var botaoReset = document.querySelector("#resetaFormulario");

  // Reset o erro dos inputs
  document.getElementById("campo-idade").classList.remove("input-error");

  // Impossibilita que a função execute com o campo vazio e deixa a borda vermelha
  if (idade === "") {
    document.getElementById("campo-idade").classList.add("input-error");
    document.getElementById("campo-idade").focus();
  } else {
    document.getElementById("login-button").disabled = true;
    document.getElementById("login-button").style.opacity = 0.5;
    document.getElementById("login-button").innerText = "Classificando...";

    if (idade <= 15) {
      //Cria um novo H2 e mostra o texto com o resultado
      var novoH1 = document.createElement("h2");
      novoH1.innerHTML = `Classificação: Pessoa jovem`;
      inputIdade.after(novoH1);

      var novoH2 = document.createElement("h2");
      novoH2.innerHTML = `Idade: ${idade} ano(s)`;
      inputIdade.after(novoH2);
    } else if (idade <= 64) {
      //Cria um novo H2 e mostra o texto com o resultado
      var novoH1 = document.createElement("h2");
      novoH1.innerHTML = `Classificação: Pessoa adulta`;
      inputIdade.after(novoH1);

      var novoH2 = document.createElement("h2");
      novoH2.innerHTML = `Idade: ${idade} ano(s)`;
      inputIdade.after(novoH2);
    } else {
      var novoH1 = document.createElement("h2");
      novoH1.innerHTML = `Classificação: Pessoa idosa`;
      inputIdade.after(novoH1);

      var novoH2 = document.createElement("h2");
      novoH2.innerHTML = `Idade: ${idade} ano(s)`;
      inputIdade.after(novoH2);
    }

    //Oculta o input e o botão

    inputIdade.style.display = "none";
    botaoClassificar.style.display = "none";

    // Formatar o estilo do novo H1 e novo H2
    novoH1.style.fontFamily = "sans-serif";
    novoH1.style.fontSize = "1.1rem";

    novoH2.style.fontFamily = "sans-serif";
    novoH2.style.fontSize = "1.1rem";

    // APARECE O BOTÃO RESET
    botaoReset.setAttribute("style", "");
  }
}
