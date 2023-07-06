console.log("Módulo 1 - Semana 5 - Exercício 5");

// --------------------------------------------------------------------------
// Utilizando a função forEach para percorrer todos os elementos do array
// --------------------------------------------------------------------------
function somaTudo (...numeros){
    console.log({numeros})

    let total = 0
    numeros.forEach((num) => {
        total += num
    })
    return total
}

const resultado = somaTudo (1,2,3,4)
console.log(resultado)

/*--------------------------------------------------------------------------
 Utilizando o Reduce e Arrow Function
 Reduce tem uma função redutora (primeiro parâmetro) e o segundo parâmetro um valor inicial. 
 Normalmente inicia-se com zero (lado direito da função). 
 A função redutora recebe o primeiro parâmetro uma função acumuladora e o item (acc,num)
 E a cada volta desejamos retornar o acumulador mais o número.
 --------------------------------------------------------------------------*/

function somaTudo2 (...numeros){
    console.log({numeros})

const total  = numeros.reduce((acc,num) => acc + num,0)
    return total
}

const resultado2 = somaTudo2 (10,20,30,40,50,20,30)
console.log(resultado2)