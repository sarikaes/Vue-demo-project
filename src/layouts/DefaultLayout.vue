<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <router-view />
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "DefaultLayout",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>
