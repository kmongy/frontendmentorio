<template>
  <main>
    <Header />

    <div class="input-container">
      <BillTotal />
    </div>
  </main>
</template>

<script>
import Header from "./components/Header.vue";
import BillTotal from "./components/BillTotal.vue";

export default {
  name: "App",
  components: {
    Header,
    BillTotal,
  },
};
</script>

<style lang="scss">
@import "./assets/sass/main.scss";
</style>
