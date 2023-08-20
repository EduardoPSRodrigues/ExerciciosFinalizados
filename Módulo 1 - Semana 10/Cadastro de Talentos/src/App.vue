<template>
  <MenuBancoTalentos />

  <router-view> </router-view>
</template>

<script>
import MenuBancoTalentos from './components/Menu/MenuBancoTalentos.vue';

export default {
  components: {
    MenuBancoTalentos,
  }

}
</script>

<style></style>