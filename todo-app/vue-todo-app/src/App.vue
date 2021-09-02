<template>
  <main>
    <Todos />
  </main>
</template>

<script>
import Todos from "./components/Todos.vue";

export default {
  name: "app",
  components: {
    Todos,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
