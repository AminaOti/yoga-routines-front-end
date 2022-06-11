<template>
  <div>
    <span test-id="HomePage"> </span>
    <HeaderComponent></HeaderComponent>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
export default {
  name: "HomePage",

  components: {
    HeaderComponent,
  },
};
</script>

<style></style>
