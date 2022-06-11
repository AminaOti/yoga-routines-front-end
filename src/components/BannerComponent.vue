<template>
  <div>
    <h1>{{ this.websiteTitle }}</h1>
    <h3>{{ this.websiteDescription }}</h3>
  </div>
</template>

<script>
export default {
  name: "BannerComponent",
  data() {
    return {
      websiteTitle: process.env.VUE_APP_WEBSITE_TITLE,
      websiteDescription: process.env.VUE_APP_WEBSITE_DESCRIPTION,
    };
  },
};
</script>

<style lang="scss" scoped></style>
