<template>
  <component :is="layout"></component>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import HomeLayout from "@/layouts/HomeLayout.vue";

export default {
  name: "HomeView",
  components: {
    DefaultLayout,
    HomeLayout,
  },
  computed: {
    layout() {
      return this.$route.meta.layout === "HomeLayout"
        ? "HomeLayout"
        : "DefaultLayout";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
