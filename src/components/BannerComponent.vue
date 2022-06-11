<template>
  <div>
    <h1>{{ this.websiteTitle }}</h1>
  </div>
</template>

<script>
export default {
  name: "BannerComponent",
  data() {
    return {
      websiteTitle: process.env.VUE_APP_WEBSITE_TITLE,
    };
  },
};
</script>

<style lang="scss" scoped></style>
