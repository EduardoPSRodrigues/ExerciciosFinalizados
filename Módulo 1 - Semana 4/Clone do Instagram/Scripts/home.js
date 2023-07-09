let usuario = {
  nomeUsuario: "João Gabriel",
  username: "joao_gaby",
  qtd_seguidores: 10000000,
  qtd_publicacoes: 1000,
  qtd_pessoas_seguindo: 5500,
  foto: "https://img.freepik.com/fotos-gratis/cintura-para-cima-retrato-de-bonito-homem-serio-com-barba-por-fazer-mantem-as-maos-juntas-vestido-com-camisa-azul-escura-tem-conversa-com-o-interlocutor-fica-contra-a-parede-branca-freelancer-homem-autoconfiante_273609-16320.jpg?w=740&t=st=1688922303~exp=1688922903~hmac=dee7d8f1de415022b6c42cf792355a74a56852ba0b749889a46bfd7da38ae142",
};

var arrayImagem = [
  "https://img.freepik.com/fotos-gratis/gatinho-fofo-olhando-pela-janela-na-luz-do-sol-gerada-por-ia_188544-24286.jpg?w=900&t=st=1688934368~exp=1688934968~hmac=8908e53f5f2d07f0efdc19b2061347ce24512d0292c4b6f1d78898e4b68a3750",
  "https://img.freepik.com/fotos-gratis/um-gatinho-fofo-brincando-olhando-para-a-camera-gerada-pela-ia_188544-20854.jpg?w=900&t=st=1688934364~exp=1688934964~hmac=0589a97fed2e28f45355ed701970bd173185b075df48cfe3d3799acce7233404",
  "https://img.freepik.com/fotos-gratis/lindo-gatinho-domestico-olhando-com-foco-seletivo-gerado-por-ia_188544-32320.jpg?w=900&t=st=1688934365~exp=1688934965~hmac=a39ea7ba78aaa72b788a04d3a04b726d4927f6b00d0b72f2f2d6e0b77a1abda4",
  'https://img.freepik.com/fotos-gratis/vista-de-filhotes-de-pantera-negra-na-natureza_23-2150374894.jpg?w=360&t=st=1688936315~exp=1688936915~hmac=a7d3a4d69f05c21f04ceac008be7a70ca087be262ea78055238f48dc9ab9821a',
  "https://img.freepik.com/fotos-gratis/filhotes-fofos-ouvindo-musica-com-fones-de-ouvido-generative-ai_260559-489.jpg?w=360&t=st=1688934365~exp=1688934965~hmac=afd77589054c8a610451221c23ebf0819cc6f69232c16b1105c4b1e00cf6e036",
  "https://img.freepik.com/fotos-gratis/vista-de-filhotes-de-pantera-negra-na-natureza_23-2150460883.jpg?w=360&t=st=1688934367~exp=1688934967~hmac=ca5e53f157d3dffef3390c948a89d2031657d1824a8b1695b95af895fb6aee2d",
  "https://img.freepik.com/fotos-gratis/gatinho-persa-fofinho-encarando-com-bigodes-curiosos-gerados-por-ia_188544-40151.jpg?w=900&t=st=1688934367~exp=1688934967~hmac=cf9eb98c0d97a38e42a611db53f826e1b3d45d81d2c87321b0ce56edb77c0947",
  "https://img.freepik.com/fotos-gratis/gatinho-fofinho-olhando-curiosamente-para-a-camera-ao-ar-livre-gerada-por-ia_188544-43260.jpg?w=900&t=st=1688934371~exp=1688934971~hmac=3753a06b7cf3f72aac64a3e22f331803e8478b7b255aa7985b2880fc8032f548",
  "https://img.freepik.com/fotos-gratis/gatinho-fofinho-encarando-a-curiosidade-ludica-do-brinquedo-gerada-pela-ia_188544-40097.jpg?w=900&t=st=1688934373~exp=1688934973~hmac=e52eba6792a6804c649f1b36f6ab564253ce7a4547cf78cf5c0dbe311c3e7fa2",
];

var listaSeguidores = ["Geraldo", "Francisco", "Gustavo", "Coelho"];

function mostrarInformacoes() {
  //Mostrar informações no HTML de acordo com os dados do objeto

  document.getElementById("nome-Usuario").innerText = usuario.nomeUsuario;
  document.getElementById("User-Name").innerText = usuario.username;
  document.getElementById("qtd-de-seguidores").innerText =
    usuario.qtd_seguidores;
  document.getElementById("qtd-de-publicacoes").innerText =
    usuario.qtd_publicacoes;
  document.getElementById("qtd-de-pessoas-seguindo").innerText =
    usuario.qtd_pessoas_seguindo;
}

function exibirImagem() {
  var galeria = document.getElementById("galeria");

  arrayImagem.forEach(item => {
  var imagem = document.createElement("img");
  var div = document.createElement("div");
  div.classList.add("grid-item");

  /*Aplicando um atributo para a variavel img, o valor que estou aplicando é o
  src e o item significa a informação que estou passando para ele. */
  imagem.setAttribute("src", item);
 
  /* Estou pegando uma imagem e jogando dentro da div */
  div.appendChild(imagem);
  /* Estou pegando uma div e jogando dentro da galeria */
  galeria.appendChild(div);
  });
}

// Assim que abrir a página é para executar a função
window.onload = mostrarInformacoes;
window.onload = exibirImagem;

