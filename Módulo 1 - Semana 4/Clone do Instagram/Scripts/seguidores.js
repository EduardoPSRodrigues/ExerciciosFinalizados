import { seguidores } from "../Constantes/seguidores.js";

const seguidoresFormatados = seguidores.map((item) => {
  return {
    //Esta falando para retornar todos os itens do array e adicionar um item chamado apelido com o nome digitado
    ...item,
    apelido:
      "#" +
      item.nome
        .toLowerCase() //deixar as letras minúsculas
        .replaceAll(" ", "_") //trocar todos os espaços por _
        .normalize("NFD") //os dois comandos tiram os acentos das palavras
        .replaceAll(/[\u0300-\u036f]/g, ""),
  };
});

//Quando digitar alguma coisa na pesquisa e der enter, vai executar a arrow function
document
  .getElementById("form-pesquisa")
  .addEventListener("submit", (evento) => {
    evento.preventDefault(); //botão submit recarrega a pagina, essa linha faz com que o evento nao faça isso

    const valorDigitadoPesquisa =
      document.getElementById("input-pesquisa").value;

    // Indo no array seguidores e estou comparando o valor do input digitado com o nome do array
    const seguidoresFiltrados = seguidoresFormatados.filter(
      (item) =>
        item.nome
          .toLowerCase()
          .normalize("NFD")
          .replaceAll(/[\u0300-\u036f]/g, "")
          .includes(
            valorDigitadoPesquisa
              .toLowerCase()
              .normalize("NFD")
              .replaceAll(/[\u0300-\u036f]/g, "")
          ) //foi preciso adicionar o includes para nao precisar digitar o nome todo e sim apenas uma parte
      // usou o tolowercase nos dois lados para manter as variaveis minusculas caso a pessoa digite o nome minusculo e nao gera conflito
    );

    document.getElementById("corpo-tabela").innerHTML = ""; //Depois que digitei, o java tirou todos os itens da tabela

    gerarLinhasDaTabela(seguidoresFiltrados);
  });

/*Primeiro criar um tr no copor da tabela, depois criar um td
depois criar uma imagem, depois jogar a imagem dentro do td
Depois fazer isso com o nome, quantidade de seguidores e pulicações */

function criarLinhasTabelas() {
  gerarLinhasDaTabela(seguidoresFormatados);
}

function gerarLinhasDaTabela(dadosDoArray) {
  dadosDoArray.map((item) => {
    const tr = document.createElement("tr"); //Criou o tr  <tr> </tr>
    const tdFoto = document.createElement("td"); //Criou o td <td></td>

    const img = document.createElement("img");
    img.setAttribute("src", item.url);
    tdFoto.appendChild(img);
    tr.appendChild(tdFoto); //Joguei o td para dentro do tr

    const tdNome = document.createElement("td");
    tdNome.innerHTML = `${item.nome} || ${item.apelido}`;
    tr.appendChild(tdNome);

    const tdSeguidores = document.createElement("td");
    tdSeguidores.innerHTML = item.quantidadeSeguidores;
    tr.appendChild(tdSeguidores);

    const tdPublicacoes = document.createElement("td");
    tdPublicacoes.innerHTML = item.quantidadePublicacoes;
    tr.appendChild(tdPublicacoes);

    document.getElementById("corpo-tabela").appendChild(tr);
  });
}

function exibirObservacao() {
   //Every: Todos os itens do array tem que ter essa condição para gerar um true.
  const mensagemSeguidor = document.getElementById('observation-mensagem')

  const seguidoresAtivos = seguidoresFormatados.every(
   (item) => item.quantidadePublicacoes >= 20)

    if(seguidoresAtivos === true){
      mensagemSeguidor.innerText = "Parabéns! Sua rede de seguidores é ativa."
      mensagemSeguidor.classList.remove('disabled-mensagem') //Aparecer a mensagem na tela

    } else {
      mensagemSeguidor.innerText = "Sua rede de seguidores não é ativa."
      mensagemSeguidor.classList.remove('disabled-mensagem') //Aparecer a mensagem na tela
      mensagemSeguidor.style.backgroundColor = '#f8904b'; //Alterando o background
      mensagemSeguidor.style.borderColor = '#f8904b'; //Alterando a borda
    }
}

function quantidadePublicacoesSeguidores(){
   //Reduce antes da virgula, tem que ter uma função ou arrow function, depois da virgula o valor inicial que vai iniciar o somatório
   const valorSeguidoresTotal = seguidoresFormatados.reduce((acumulador, item) => {
      return item.quantidadePublicacoes + acumulador
   }, 0)
   console.log(valorSeguidoresTotal);

   const nomes = seguidoresFormatados.reduce((acumulador, item) => {
      return acumulador + ', ' + item.nome 
   }, '')
   console.log(nomes);
}

// Executando a função
exibirObservacao() 
quantidadePublicacoesSeguidores()

window.onload = criarLinhasTabelas;
