console.log("Módulo 1 - Semana 5 - Exercício 8");

const campoInicial = document.getElementById("valor-inicial");
const campoRaiz = document.getElementById("valor-raiz");
const campoQtdTermos = document.getElementById("valor-qtd-termos");
const botaoCalcularPa = document.getElementById("botao-calcular-pa");
const botaoCalcularPg = document.getElementById("botao-calcular-pg");

function calculaPA(inicial, raiz, qtdTermos) {
  // Inicializa o array de pa com o valor inicial
  const pa = [inicial];

  // faz 10 voltas calculando os valores seguintes
  for (let i = 1; i < qtdTermos; i++) {
    const valorAnterior = pa[i - 1];
    pa.push(valorAnterior + raiz);
  }

  console.log(pa);
}

function calculaPG(inicial, raiz, qtdTermos) {
  // inicializa o array de pg com o valor inicial
  const pg = [inicial];

  for (let i = 1; i < qtdTermos; i++) {
    const valorAnterior = pg[i - 1];
    pg.push(valorAnterior * raiz);
  }

  console.log(pg);
}

botaoCalcularPa.addEventListener("click", () => {
  // Formas de converter um string para number
  // const inicial = Number(campoInicial.value);
  // const inicial = parseInt(campoInicial.value);
  // const inicial = parseFloat(campoInicial.value);

  // const raiz = Number(campoRaiz.value);
  // const raiz = parseInt(campoRaiz.value);
  // const raiz = parseFloat(campoRaiz.value);

  // Equivalente
  const inicial = +campoInicial.value;
  const raiz = +campoRaiz.value;
  const qtdTermos = +campoQtdTermos.value;

  calculaPA(inicial, raiz, qtdTermos);
});

botaoCalcularPg.addEventListener("click", () => {
  const inicial = +campoInicial.value;
  const raiz = +campoRaiz.value;
  const qtdTermos = +campoQtdTermos.value;

  calculaPG(inicial, raiz, qtdTermos);
});