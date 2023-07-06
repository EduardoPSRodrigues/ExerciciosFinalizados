console.log("Módulo 1 - Semana 5 - Exercício 8");

const valorInicial = Number(prompt("Valor inicial:"));
const raiz = Number(prompt("Raiz da PA:"));

function calculaPA(valorInicial, raiz) {
  const pa = [valorInicial];

  for (let i = 0; i < 9; i++) {
    pa.push(pa[i] + raiz);
  }
  console.log(pa);
}

calculaPA(valorInicial, raiz);
