<template>
  <v-layout>
    <v-app-bar color="blue-grey-darken-4" >
      <v-app-bar-title class="text-h5 corTexto">Funko Lab</v-app-bar-title>

      <v-btn icon class="corTexto">
        <router-link to="/carrinho">
          <v-icon class="corTexto">mdi-cart</v-icon>
        </router-link>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>
<style>
.corTexto{
  color: #fbba00;
}</style>
