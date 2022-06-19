<template>
  <div>
    <h1>{{ this.websiteTitle }}</h1>
    <h3>{{ this.websiteDescription }}</h3>
    <img v-bind:src="this.websiteImage" alt="website-image" />
  </div>
</template>

<script>
import image from "../assets/images/websiteImage.jpeg";

export default {
  name: "BannerComponent",
  data() {
    return {
      websiteTitle: process.env.VUE_APP_WEBSITE_TITLE,
      websiteDescription: process.env.VUE_APP_WEBSITE_DESCRIPTION,
      websiteImage: image,
    };
  },
};
</script>

<style lang="scss" scoped></style>
