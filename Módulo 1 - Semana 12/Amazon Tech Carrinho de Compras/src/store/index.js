import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            teste: 'Ola mundo',
            produtosCarrinho: []
        }
    },
    mutations: {
        alterarTeste(state, value) {
            state.teste = value
        },
        adicionarProdutoAoCarrinho(state, produtoRecebido) {

            //Estou pegando o valor atual do state do  e procurando o id dele dentro de produtosCarrinho seja igual ao
            //id que estou recebendo como parametro
            const produtoNoCarrinho = state.produtosCarrinho.find(produto => produto.id === produtoRecebido.id)
            
            //Se ele encontrar o id, ele ira retornar todas as informações da variável
            if (produtoNoCarrinho) {
                //Se o produto estiver no carrinho, então tenho que percorrer a função e adicionar mais um item
                state.produtosCarrinho = state.produtosCarrinho.map(item => {
                    if (item.id === produtoRecebido.id) {
                        item.quantidade = item.quantidade + 1
                    }
                    //Retorna o array atualizado
                    return item
                })

            } else {
                //Se ele não tiver sido selecionado para ir no carrinho, ele vai manter todas as informações e adicionar
                //a variável quantidade: 1 - Apenas para ter essa variável
                state.produtosCarrinho = [
                    ...state.produtosCarrinho,
                    {
                        ...produtoRecebido,
                        quantidade: 1
                    }
                ]
            }



        }
    },
    actions: {
        alterarNome(context, value) {
            console.log(value.nome)
            console.log("entrei no alterar nome")
            context.commit("alterarTeste", value.nome)
        },
        adicionarProduto(context, value) {
            context.commit("adicionarProdutoAoCarrinho", value.product)
        }
    }
})

export default store