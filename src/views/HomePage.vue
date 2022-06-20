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

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap");
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
}
</style>
