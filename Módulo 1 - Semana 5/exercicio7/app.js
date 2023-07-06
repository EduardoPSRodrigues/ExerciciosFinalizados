console.log("Módulo 1 - Semana 5 - Exercício 7");

/* --------------------------------------------------------------------------
Opção 1 - Destructuring
--------------------------------------------------------------------------*/

const pessoa = {
  nome: "Ada",
  idade: 36,
  profissao: "matemática",
};

const mensagem = montaMensagem(pessoa);
console.log(mensagem);

function montaMensagem(pessoa) {
  // Fazendo o destructuring
  const { nome, idade, profissao } = pessoa;

  return `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`;
}

/* --------------------------------------------------------------------------
Opção 2 - Destructuring direto
--------------------------------------------------------------------------*/

const pessoa1 = {
  nome: "José",
  idade: 10,
  profissao: "bebê",
};

const mensagem2 = montaMensagem1(pessoa1);
console.log(mensagem2);

function montaMensagem1({ nome, idade, profissao }) {
  return `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`;
}

/* --------------------------------------------------------------------------
Opção 3 - Destructuring direto com Arrow Function
--------------------------------------------------------------------------*/

const pessoa2 = {
  nome: "Isa",
  idade: 30,
  profissao: "empresária",
};

const montaMensagem2 = ({ nome, idade, profissao }) => {
  return `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`;
};

const mensagem3 = montaMensagem2(pessoa2);
console.log(mensagem3);
