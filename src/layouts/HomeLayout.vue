<template>
  <div>
    <HomeHeaderComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import HomeHeaderComponent from "../components/HomeHeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  name: "HomeLayout",
  components: {
    HomeHeaderComponent,
    FooterComponent,
  },
};
</script>
