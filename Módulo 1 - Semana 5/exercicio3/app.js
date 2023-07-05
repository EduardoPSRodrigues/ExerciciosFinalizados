console.log("Módulo 1 - Semana 5 - Exercício 3");

// --------------------------------------------------------------------------
// Concatenando vetores
// --------------------------------------------------------------------------

function concatVetores(arrayA, arrayB) {
  return [...arrayA, ...arrayB];
}
const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];

const novoArray = concatVetores(arrayA, arrayB);

console.log(novoArray);

// --------------------------------------------------------------------------
// Concatenando vetores com Arrow Functions
// --------------------------------------------------------------------------

const concatVetores2 = (arrayC, arrayD) => {
  return [...arrayC, ...arrayD];
};
const arrayC = [10, 20, 30];
const arrayD = [40, 50, 60];

const novoArray1 = concatVetores2(arrayC, arrayD);

console.log(novoArray1);

// --------------------------------------------------------------------------
// Mesclando Objetos
// --------------------------------------------------------------------------

function mesclarObjetos(objetoA, objetoB) {
  return { ...objetoA, ...objetoB };
}

const objetoA = { a: 1, b: 2 };
const objetoB = { c: 3, d: 4 };

const novoObjeto = mesclarObjetos(objetoA, objetoB);

console.log(novoObjeto);

// --------------------------------------------------------------------------
// Mesclando Objetos com Arrow Functions
// --------------------------------------------------------------------------

const mesclarObjetos2 = (objetoC, objetoD) => {
  return { ...objetoC, ...objetoD };
};

const objetoC = { x: 10, y: 20 };
const objetoD = { z: 30, w: 40 };

const novoObjeto2 = mesclarObjetos2(objetoC, objetoD);

console.log(novoObjeto2);
