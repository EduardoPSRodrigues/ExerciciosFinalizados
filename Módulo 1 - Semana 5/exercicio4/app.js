console.log("Módulo 1 - Semana 5 - Exercício 4");

// --------------------------------------------------------------------------
// Tabuada chamando uma Função
// --------------------------------------------------------------------------

const numero = prompt("Informe um número");

console.log("Tabuada chamando uma Função");
calculaTabuada(numero);

function calculaTabuada(numero) {
  for (let i = 0; i <= 10; i++) {
    console.log(`${numero} * ${i} = ${numero * i}`);
  }
}

// --------------------------------------------------------------------------
// Tabuada com Arrow Function
// --------------------------------------------------------------------------

const calculaTabuada1 = (numero2) => {
  for (let i = 0; i <= 10; i++) {
    console.log(`${numero2} * ${i} = ${numero2 * i}`);
  }
};

console.log("");
console.log("Tabuada com Arrow Function");
calculaTabuada1(numero);

