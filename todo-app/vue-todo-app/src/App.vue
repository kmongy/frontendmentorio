<template>
  <Todos />
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
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
}
</style>
