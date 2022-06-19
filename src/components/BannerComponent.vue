<template>
  <div>
    <h1>{{ this.websiteTitle }}</h1>
    <h3>{{ this.websiteDescription }}</h3>
    <img src="@/assets/images/websiteImage.jpeg" alt="website-image" />
  </div>
</template>

<script>
export default {
  name: "BannerComponent",
  data() {
    return {
      websiteTitle: process.env.VUE_APP_WEBSITE_TITLE,
      websiteDescription: process.env.VUE_APP_WEBSITE_DESCRIPTION,
      websiteImage: "@/assets/images/websiteImage.jpeg",
    };
  },
};
</script>

<style lang="scss" scoped></style>
