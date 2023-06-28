function clicarNoBotao() {
  // Seleciona todos os elementos que precisa manipular
  var nota1 = Number(document.getElementById("campo-nota1").value);
  var nota2 = Number(document.getElementById("campo-nota2").value);
  var nota3 = Number(document.getElementById("campo-nota3").value);

  var inputNota1 = document.querySelector("#campo-nota1");
  var inputNota2 = document.querySelector("#campo-nota2");
  var inputNota3 = document.querySelector("#campo-nota3");
  var botaoCalcular = document.querySelector("#login-button");
  var botaoReset = document.querySelector("#resetaFormulario");
  var h1 = document.querySelector("h1");
  var selecionaMedia = document.getElementById("selectMedia");

  // Para selecionar as opções do select
  selecionaMedia.addEventListener(Selection, function () {});

  // Reset o erro dos inputs
  document.getElementById("campo-nota1").classList.remove("input-error");
  document.getElementById("campo-nota2").classList.remove("input-error");
  document.getElementById("campo-nota3").classList.remove("input-error");

  // Impossibilita que a função execute com os campos vazios e deixa a borda
  // vermelha
  if (!nota1) {
    document.getElementById("campo-nota1").classList.add("input-error");
    document.getElementById("campo-nota1").focus();
  } else if (!nota2) {
    document.getElementById("campo-nota2").classList.add("input-error");
    document.getElementById("campo-nota2").focus();
  } else if (!nota3) {
    document.getElementById("campo-nota3").classList.add("input-error");
    document.getElementById("campo-nota3").focus();
  } else {
    document.getElementById("login-button").disabled = true;
    document.getElementById("login-button").style.opacity = 0.5;
    document.getElementById("login-button").innerText = "Calculando...";

    if (selecionaMedia.value === "mediaAritmetica") {
      var media = (nota1 + nota2 + nota3) / 3;
      var mediaFormatada = media.toFixed(2);
    } else if (selecionaMedia.value === "mediaPonderada") {
      var media = (nota1 * 3 + nota2 * 3 + nota3 * 4) / 10;
      var mediaFormatada = media.toFixed(2);
    } else {
      alert("Selecione uma opção válida");
    }

    //Oculta o h1, os inputs, o botão e o select

    h1.style.display = "none";
    inputNota1.style.display = "none";
    inputNota2.style.display = "none";
    inputNota3.style.display = "none";
    botaoCalcular.style.display = "none";
    selecionaMedia.style.display = "none";

    if (mediaFormatada < 7) {
      outroH1 = document.createElement("h2");
      outroH1.innerHTML = `O valor da média é ${mediaFormatada}`;
      h1.after(outroH1);

      var novoH1 = document.createElement("h2");
      novoH1.innerHTML = `Você está de recuperação`;
      h1.after(novoH1);
    } else {
      outroH1 = document.createElement("h2");
      outroH1.innerHTML = `O valor da média é ${mediaFormatada}`;
      h1.after(outroH1);

      var novoH1 = document.createElement("h2");
      novoH1.innerHTML = `Parabéns - Você está aprovado`;
      h1.after(novoH1);
    }

    // Formatar o estilo do novo H1
    novoH1.style.fontFamily = "sans-serif";
    novoH1.style.fontSize = "1.3rem";
    novoH1.style.alignItems = "center";

    outroH1.style.fontFamily = "sans-serif";
    outroH1.style.fontSize = "1.3rem";
    outroH1.style.alignItems = "center";

    // Aparece o botão de reset
    botaoReset.setAttribute("style", "");
  }
}
