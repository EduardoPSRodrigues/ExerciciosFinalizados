const formPesquisa = document.getElementById('form-pesquisa')

formPesquisa.addEventListener('submit', pesquisarPerfil)

function pesquisarPerfil(evento) {
    evento.preventDefault()

    const PerfilDoUsuario = document.getElementById('PerfilDoUsuario')
    const nomeDigitado = document.getElementById('username').value

    fetch(`https://api.github.com/users/${nomeDigitado}`)
    .then((respostaDaRequisicao) => respostaDaRequisicao.json())
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
}



/* Informações do código:

* .then((respostaDaRequisicao) => respostaDaRequisicao.json()) convertendo a resposta da requisição para o formato json*/