import { seguidores } from "../Constantes/seguidores.js";

//Quando digitar alguma coisa na pesquisa e der enter, vai executar a arrow function
document.getElementById('form-pesquisa').addEventListener('submit', (evento) => {
    evento.preventDefault() //botão submit recarrega a pagina, essa linha faz com que o evento nao faça isso

    const valorDigitadoPesquisa = document.getElementById('input-pesquisa').value

    // Indo no array seguidores e estou comparando o valor do input digitado com o nome do array
    const seguidoresFiltrados = seguidores.filter((item) => item.nome === valorDigitadoPesquisa)

    document.getElementById('corpo-tabela').innerHTML = "" //Depois que digitei, o java tirou todos os itens da tabela


    //NAO ESTA SENDO USADO
    const seguidoresFiltradosNovo = seguidores.map(item => {
        return {
         //Esta falando para retornar todos os itens do array e adicionar um item chamado apelido com o nome digitado
         ...item, 
         apelido: "#" + item.nome.toLowerCase() //deixar as letras minúsculas
         .replaceAll(" ","_") //trocar todos os espaços por _
         .normalize('NFD') //os dois comandos tiram os acentos das palavras
         .replaceAll(/[\u0300-\u036f]/g,"")
        }
     });

     seguidoresFiltrados.map((item) => {
        const tr = document.createElement("tr"); //Criou o tr  <tr> </tr>
        const tdFoto = document.createElement("td"); //Criou o td <td></td>
    
        const img = document.createElement("img");
        img.setAttribute("src", item.url);
        tdFoto.appendChild(img);
        tr.appendChild(tdFoto); //Joguei o td para dentro do tr
    
        const tdNome = document.createElement("td");
        tdNome.innerHTML = `${item.nome} || ${item.apelido}`
        tr.appendChild(tdNome)
    
        const tdSeguidores = document.createElement("td");
        tdSeguidores.innerHTML = item.quantidadeSeguidores
        tr.appendChild(tdSeguidores)
    
        const tdPublicacoes = document.createElement("td");
        tdPublicacoes.innerHTML = item.quantidadePublicacoes
        tr.appendChild(tdPublicacoes)
    
        document.getElementById("corpo-tabela").appendChild(tr);
    
    
      });



})

/*Primeiro criar um tr no copor da tabela, depois criar um td
depois criar uma imagem, depois jogar a imagem dentro do td
Depois fazer isso com o nome, quantidade de seguidores e pulicações */

function criarLinhasTabelas() {
   
    const seguidoresFormatados = seguidores.map(item => {
    return {
     //Esta falando para retornar todos os itens do array e adicionar um item chamado apelido com o nome digitado
     ...item, 
     apelido: "#" + item.nome.toLowerCase() //deixar as letras minúsculas
     .replaceAll(" ","_") //trocar todos os espaços por _
     .normalize('NFD') //os dois comandos tiram os acentos das palavras
     .replaceAll(/[\u0300-\u036f]/g,"")
    }
 });


 seguidoresFormatados.map((item) => {
    const tr = document.createElement("tr"); //Criou o tr  <tr> </tr>
    const tdFoto = document.createElement("td"); //Criou o td <td></td>

    const img = document.createElement("img");
    img.setAttribute("src", item.url);
    tdFoto.appendChild(img);
    tr.appendChild(tdFoto); //Joguei o td para dentro do tr

    const tdNome = document.createElement("td");
    tdNome.innerHTML = `${item.nome} || ${item.apelido}`
    tr.appendChild(tdNome)

    const tdSeguidores = document.createElement("td");
    tdSeguidores.innerHTML = item.quantidadeSeguidores
    tr.appendChild(tdSeguidores)

    const tdPublicacoes = document.createElement("td");
    tdPublicacoes.innerHTML = item.quantidadePublicacoes
    tr.appendChild(tdPublicacoes)

    document.getElementById("corpo-tabela").appendChild(tr);


  });
}

window.onload = criarLinhasTabelas;
