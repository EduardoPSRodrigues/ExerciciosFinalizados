function clicarNoBotao() {
  // Seleciona todos os elementos que precisa manipular
  var nome = document.getElementById("campo-nome").value;
  var dataInicial = document.getElementById("campo-data-inicial").value;
  var dataFinal = document.getElementById("campo-data-final").value;
  var inputNome = document.querySelector("#campo-nome");
  var inputDataInicial = document.querySelector("#campo-data-inicial");
  var inputDataFinal = document.querySelector("#campo-data-final");
  var labelDataInicial = document.querySelector("#label-data-inicial");
  var labelDataFinal = document.querySelector("#label-data-final");
  var botaoGerarCarta = document.querySelector("#login-button");
  var botaoReset = document.querySelector("#resetaFormulario");
  var h1 = document.querySelector("h1");

  // Reset o erro dos inputs
  document.getElementById("campo-nome").classList.remove("input-error");
  document.getElementById("campo-data-inicial").classList.remove("input-error");
  document.getElementById("campo-data-final").classList.remove("input-error");

  // Impossibilita que a função execute com os campos vazios e deixa a borda
  // vermelha
  if (nome === "") {
    document.getElementById("campo-nome").classList.add("input-error");
    document.getElementById("campo-nome").focus();
  } else if (dataInicial === "") {
    document.getElementById("campo-data-inicial").classList.add("input-error");
    document.getElementById("campo-data-inicial").focus();
  } else if (dataFinal === "") {
    document.getElementById("campo-data-final").classList.add("input-error");
    document.getElementById("campo-data-final").focus();
  } else if (dataInicial > dataFinal) {
    alert("A data inicial não pode ser maior que a data final.");
    return;
  } else {
    document.getElementById("login-button").disabled = true;
    document.getElementById("login-button").style.opacity = 0.5;
    document.getElementById("login-button").innerText = "Gerando Carta...";

    //Oculta o h1, os inputs e o botão

    h1.style.display = "none";
    inputNome.style.display = "none";
    inputDataInicial.style.display = "none";
    inputDataFinal.style.display = "none";
    botaoGerarCarta.style.display = "none";
    labelDataInicial.style.display = "none";
    labelDataFinal.style.display = "none";

    //-------------------------------------------------------------------------------
    // new Date() representa a variável do dia, mês, ano e horário
    // Para pegar esses elementos tem que criar variáveis

    // // Cria um objeto Date com base no valor do campo de entrada Data Inicial
    const dataDoInputInicial = new Date(dataInicial);

    // // Extrai o dia, mês e ano da data
    const diaInicialInput = dataDoInputInicial.getDate();
    const mesInicialInput = dataDoInputInicial.getMonth() + 1; // Os meses são indexados a partir de zero
    const anoInicialInput = dataDoInputInicial.getFullYear();

    // // Formata a data no formato "dd/mm/aaaa"
    const dataInicialFormatada = `${diaInicialInput
      .toString()
      .padStart(2, "0")}/${mesInicialInput
      .toString()
      .padStart(2, "0")}/${anoInicialInput}`;

    //-------------------------------------------------------------------------------

    // // Cria um objeto Date com base no valor do campo de entrada Data Final
    const dataDoInputFinal = new Date(dataFinal);

    // // Extrai o dia, mês e ano da data
    const diaDoInputFinal = dataDoInputFinal.getDate();
    const mesDoInputFinal = dataDoInputFinal.getMonth() + 1; // Os meses são indexados a partir de zero
    const anoDoInputFinal = dataDoInputFinal.getFullYear();

    // // Formata a data no formato "dd/mm/aaaa"
    const dataFinalFormatada = `${diaDoInputFinal
      .toString()
      .padStart(2, "0")}/${mesDoInputFinal
      .toString()
      .padStart(2, "0")}/${anoDoInputFinal}`;

    //-------------------------------------------------------------------------------
    // Escreve a data por extenso

    const dataCorrente = new Date();
    const meses = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    const diaGeradoCarta = dataCorrente.getDate();
    const mesAtual = dataCorrente.getMonth();
    const mesExtensoGeradoCarta = meses[mesAtual];
    const anoGeradoCarta = dataCorrente.getFullYear();

    const carta = `Carta de Férias

    Caro(a) responsável,
    Gostaria de solicitar minhas férias:

    Nome do funcionário: ${nome} 
    Data de início: ${dataInicialFormatada}
    Data de fim: ${dataFinalFormatada}

    Agradeço a atenção.
    Atenciosamente, 

    Gerado em ${diaGeradoCarta} de ${mesExtensoGeradoCarta} de ${anoGeradoCarta}`;

    //Cria um novo H1 que vai aparecer no lugar do carta de férias e mostra
    //o novo texto com o resultado

    var novoParagrafo = document.createElement("p");
    novoParagrafo.innerText = carta;
    h1.after(novoParagrafo);

    // Formatar o estilo do novo H1
    novoParagrafo.style.fontFamily = "sans-serif";
    novoParagrafo.style.fontSize = "0.9rem";

    // APARECE O BOTÃO RESET
    botaoReset.setAttribute("style", "");
  }
}
