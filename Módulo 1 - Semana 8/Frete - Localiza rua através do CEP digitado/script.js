const cepForm = document.getElementById("cepForm");

cepForm.addEventListener("submit", exibirDados);

function exibirDados(evento) {
  evento.preventDefault();

  const cepInput = document.getElementById("cep").value;
  const resultadoDaPesquisa = document.getElementById("resultadoDaPesquisa");

  if (cepInput.length === 8 || cepInput.length === 9) {
    fetch(`https://viacep.com.br/ws/${cepInput}/json/`)
      .then((respostaDoSite) => {
        return respostaDoSite.json();
      })
      .then((dadosDoLogradouro) => {
        console.log(dadosDoLogradouro);

        resultadoDaPesquisa.innerText = dadosDoLogradouro.logradouro;

        resultadoDaPesquisa.innerHTML = `
        <p><b>Endereço:</b> ${dadosDoLogradouro.logradouro}</p>
        <p><b>Bairro:</b> ${dadosDoLogradouro.bairro}</p>
        <p><b>Cidade:</b> ${dadosDoLogradouro.localidade}</p>
        <p><b>UF:</b> ${dadosDoLogradouro.uf}</p>
        <p><b>DDD:</b> ${dadosDoLogradouro.ddd}</p> `;
      })

      .catch((erro) => {
        console.log("Entrei aqui no catch");
        alert("ERRO AO FAZER A SOLICITACAO!");
      });
  } else {
    alert("Digite um CEP válido.");
  }
}

/*Informações do código:
* cepInput.length !==8  Se essa variável for diferente de 8
* fetch('') vai até a URL informada e trás informações em forma de objeto
  Sendo que a informação fica armazenada em Inpecionar código - Network - json - Response
* .then() vai capturar a resposta da requisição se foi com êxito ou com erro    
  .then((respostaDoSite) => respostaDoSite.json()) vai capturar os dados do json
  .then ((dadosDoLogradouro) => console.log(dadosDoLogradouro)) vai trazer os dados capturados e mostrar no console.log()
* .catch() caso o fetch não encontre o CEP, o .catch vai trazer uma informação de erro. Quando acontece uma rejeição
  não passa pelo then, vai direto para o catch()   
* o site disponibiliza o código em javascript e HTML já formatado em  https://viacep.com.br/exemplo/javascript/
  */
