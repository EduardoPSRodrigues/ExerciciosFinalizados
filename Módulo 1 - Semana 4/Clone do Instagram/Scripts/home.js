let usuario = {
  nomeUsuario: "João Gabriel",
  username: "joao_gaby",
  qtd_seguidores: 10000000,
  qtd_publicacoes: 1000,
  qtd_pessoas_seguindo: 5500,
  foto: "https://img.freepik.com/fotos-gratis/cintura-para-cima-retrato-de-bonito-homem-serio-com-barba-por-fazer-mantem-as-maos-juntas-vestido-com-camisa-azul-escura-tem-conversa-com-o-interlocutor-fica-contra-a-parede-branca-freelancer-homem-autoconfiante_273609-16320.jpg?w=740&t=st=1688922303~exp=1688922903~hmac=dee7d8f1de415022b6c42cf792355a74a56852ba0b749889a46bfd7da38ae142",
};

var listaSeguidores = [
    "Geraldo",
    "Francisco",
    "Gustavo",
    "Coelho",
]

function mostrarInformacoes() {
  //Mostrar informações no HTML de acordo com os dados do objeto

  document.getElementById("nome-Usuario").innerText = usuario.nomeUsuario
  document.getElementById("User-Name").innerText = usuario.username
  document.getElementById("qtd-de-seguidores").innerText = usuario.qtd_seguidores
  document.getElementById("qtd-de-publicacoes").innerText = usuario.qtd_publicacoes
  document.getElementById("qtd-de-pessoas-seguindo").innerText = usuario.qtd_pessoas_seguindo
}

// Assim que abrir a página é para executar a função
window.onload = mostrarInformacoes