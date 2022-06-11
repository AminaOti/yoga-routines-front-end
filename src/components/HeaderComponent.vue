<template>
  <div>
    <h1>{{ this.websiteTitle }}</h1>
    <h1 v-on:click="linkToHomePage" data-test="home-page-link">Home Page</h1>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      websiteTitle: process.env.VUE_APP_WEBSITE_TITLE,
    };
  },
  methods: {
    linkToHomePage() {
      this.$router.push("/");
      console.log("link clicked");
    },
  },
};
</script>

<style lang="scss" scoped></style>
