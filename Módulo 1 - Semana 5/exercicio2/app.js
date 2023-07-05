console.log("Módulo 1 - Semana 5 - Exercício 2");
const numeros = [20,10, 30];
procuraMinMax(numeros);

//Utilizando o SPREAD para jogar todas as variáveis do array
function procuraMinMax(numeros) {
  if (!numeros || !numeros.length) {
    console.log(`Opção 1: Não é possível encontrar o número`);
    return //Finaliza a função
  } 

    let min = Math.min(...numeros);
    let max = Math.max(...numeros);
  
    console.log(`Opção 1: Valor Mínimo: ${min} - Valor Máximo: ${max}`);

}

//--------------------------------------------------------------------------

const numeros1 = [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47];
procuraMinMax2(numeros1);

function procuraMinMax2(numeros1) {
  if (!numeros1 || !numeros1.length) {
    console.log(`Opção 2: Não é possível encontrar o número`);
    return //Finaliza a função
  } 

  //Nessa caso iniciou a função com o primeiro número do array
  let min = numeros1[0];
  let max = numeros1[0];

  numeros1.forEach((num) => {
    if (num < min) {
      min = num;
    } else if (num > max) {
      max = num;
    }
  });
  console.log(`Opção 2: Valor Mínimo: ${min} - Valor Máximo: ${max}`);
}

//--------------------------------------------------------------------------

const numeros2 = [1, -1];
procuraMinMax3(numeros2);

function procuraMinMax3(numeros2) {
  if (!numeros2 || !numeros2.length) {
    console.log(`Opção 3: Não é possível encontrar o número`);
    return //Finaliza a função
  } 

  //Nessa caso iniciou a função com o primeiro número do array
  let min = numeros2[0];
  let max = numeros2[0];

  for (let i = 0; i < numeros2.length; i++) {
    const num = numeros2[i];
    if (num < min) {
      min = num;
    } else if (num > max) {
      max = num;
    }
  }

  console.log(`Opção 3: Valor Mínimo: ${min} - Valor Máximo: ${max}`);
}
