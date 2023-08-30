<template>
  
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Imagem</th>
          <th class="text-left">Nome</th>
          <th class="text-left">Quantidade</th>
          <th class="text-left">Preço</th>
          <th class="text-left">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in this.$store.state.produtosCarrinho" :key="item.id">
          <td><img :src="item.imagem" width="30" /></td>
          <td>{{ item.nome }}</td>
          <td>{{ item.quantidade }}</td>
          <td>{{ item.preco }}</td>
          <td>
            {{
              new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
                item.quantidade * item.preco
              )
            }}
          </td>
        </tr>
      </tbody>

      <v-btn color="warning" dark>
        <router-link to="/" color="#FFF" class="text-decoration-none">
        Voltar para Loja
      </router-link>
      </v-btn>

    </v-table>
  </template>