function clicarNoBotao() {
  // Seleciona todos os elementos que precisa manipular
  var peso = document.getElementById("campo-peso").value;
  var distancia = document.getElementById("campo-distancia").value;

  var inputPeso = document.querySelector("#campo-peso");
  var inputDistancia = document.querySelector("#campo-distancia");
  var botaoCalcular = document.querySelector("#login-button");
  var botaoReset = document.querySelector("#resetaFormulario");
  var h1 = document.querySelector("h1");

  // Reset o erro dos inputs
  document.getElementById("campo-peso").classList.remove("input-error");
  document.getElementById("campo-distancia").classList.remove("input-error");

  // Impossibilita que a função execute com os campos vazios e deixa a borda
  // vermelha
  if (peso === "") {
    document.getElementById("campo-peso").classList.add("input-error");
    document.getElementById("campo-peso").focus();
  } else if (distancia === "") {
    document.getElementById("campo-distancia").classList.add("input-error");
    document.getElementById("campo-distancia").focus();
  } else {
    document.getElementById("login-button").disabled = true;
    document.getElementById("login-button").style.opacity = 0.5;
    document.getElementById("login-button").innerText = "Calculando...";

    var custoPeso = peso * 0.5;
    var custoDistancia = distancia * 0.1;
    var custoFrete = custoPeso + custoDistancia;

    //Converter o resultado em Reais
    var custoFreteFormat = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(custoFrete);

    //Oculta o h1, os inputs e o botão

    h1.style.display = "none";
    inputPeso.style.display = "none";
    inputDistancia.style.display = "none";
    botaoCalcular.style.display = "none";

    //Cria um novo H1 que vai aparecer no lugar do cálculo do frete e mostra
    //o novo texto com o resultado
    var novoH1 = document.createElement("h2");
    novoH1.innerHTML = `O Valor do Frete é de ${custoFreteFormat}`;
    h1.after(novoH1);

    // Formatar o estilo do novo H1
    novoH1.style.fontFamily = "sans-serif";
    novoH1.style.fontSize = "1.3rem";

    // APARECE O BOTÃO RESET
    botaoReset.setAttribute("style", "");
  }
}
