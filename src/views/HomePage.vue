<template>
  <div>
    <span test-id="HomePage"> </span>
    <HeaderComponent></HeaderComponent>
    <BannerComponent></BannerComponent>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import BannerComponent from "../components/BannerComponent.vue";
export default {
  name: "HomePage",

  components: {
    HeaderComponent,
    BannerComponent,
  },
};
</script>

<style></style>
