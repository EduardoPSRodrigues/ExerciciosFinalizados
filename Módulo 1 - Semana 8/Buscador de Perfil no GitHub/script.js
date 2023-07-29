const formPesquisa = document.getElementById('form-pesquisa')

formPesquisa.addEventListener('submit', pesquisarPerfil)

function pesquisarPerfil(evento) {
    evento.preventDefault()

    const PerfilDoUsuario = document.getElementById('PerfilDoUsuario')
    const nomeDigitado = document.getElementById('username').value

    fetch(`https://api.github.com/users/${nomeDigitado}`)
    .then((respostaDaRequisicao) => {
      if (respostaDaRequisicao.ok === false){
        throw new Error('Houve uma falha na operação.')
      }
      return respostaDaRequisicao.json();
    })

    .then((dadosDaRequisicao) => {
        console.log(dadosDaRequisicao);
        
        PerfilDoUsuario.innerHTML = `
        <img src=${dadosDaRequisicao.avatar_url} alt="Foto do Perfil" /> 
        <p>Nome: ${dadosDaRequisicao.name}</p>
        <p>Repositórios públicos: ${dadosDaRequisicao.public_repos} </p>
        <p>Seguidores: ${dadosDaRequisicao.followers} </p>
        <p>Seguindo: ${dadosDaRequisicao.following} </p>
        `
    })
    .catch(() => {
        alert("ERRO AO FAZER A SOLICITACAO!")
      })
}

/* Informações do código:

* .then((respostaDaRequisicao) => respostaDaRequisicao.json()) convertendo a resposta da requisição para o formato json
* Quando acontece o erro 404, o java interpreta como informação não identificada mas não cai no catch()
  Por esse motivo, ele retorna uma informação como false e para informar ao usuário o erro, tem que criar uma função com if()
* if (respostaDoSite.ok === false) {throw new Error('Houve uma falha na operação.')} se o parametro ok for false é para ir direto 
  para o catch()  
  */