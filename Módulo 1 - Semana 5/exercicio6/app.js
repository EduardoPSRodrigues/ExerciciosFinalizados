console.log("Módulo 1 - Semana 5 - Exercício 6");

/* --------------------------------------------------------------------------
Um palíndromo é quando a palavra que se pode ler, indiferentemente, da esquerda para direita
ou vice-versa", como por exemplo: osso, Ana, radar.
--------------------------------------------------------------------------*/

function verificaPalindromo(palavra) {
  if (!palavra || !palavra.length) {
    console.log(`Variável vazia, favor insira uma palavra`);
    return; //Finaliza a função
  }

  const finalPalavra = palavra.length - 1;

  // Fazer um for para percorrer a palavra toda no sentido horário e anti-horário

  for (let i = 0; i < palavra.length; i++) {
    console.log(palavra[i], palavra[finalPalavra - i]);
  }

  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] !== palavra[finalPalavra - i])
      return console.log(`Função 1: A palavra ${palavra} não é um palíndromo`);
  }

  return console.log(`Função 1: A palavra ${palavra} é um palíndromo`);
}

/* --------------------------------------------------------------------------
Fazendo uma função com SPLIT, REVERSE E JOIN
SPLIT("") separa letras em um array de letras
REVERSE() inverte a ordem das letras do array
JOIN("") une as letras novamente em uma string
--------------------------------------------------------------------------*/

function verificaPalindromo2(palavra) {
  if (!palavra || !palavra.length) {
    console.log(`Variável vazia, favor insira uma palavra`);
    return; //Finaliza a função
  }

  const palavraInvertida = palavra.split("").reverse().join("");
  if (palavra === palavraInvertida) {
    console.log(`Função 2: A palavra ${palavra} é um palíndromo`);
  } else {
    console.log(`Função 2: A palavra ${palavra} não é um palíndromo`);
  }
}

verificaPalindromo("ana");
verificaPalindromo("julia");
verificaPalindromo("arara");

verificaPalindromo2("josé");
verificaPalindromo2("osso");
verificaPalindromo2("trem");
