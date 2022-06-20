<template>
  <div class="banner-container">
    <img v-bind:src="this.websiteImage" alt="website-image" />
    <header>
      <ul>
        <p class="title">{{ this.websiteTitle }}</p>
        <p class="page-description">{{ this.websiteDescription }}</p>
      </ul>
    </header>
  </div>
</template>

<script>
import image from "../assets/images/websiteImage.jpeg";
import "../assets/styles/theme-colors.scss";

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

<style scoped>
.banner-container {
  display: flex;
  flex: 1 1 auto;
  height: 500px;
}

img {
  width: 50%;
  height: 100%;
  object-fit: cover;
}

header {
  width: 50%;
  height: 100%;
  background-color: var(--secondary-color);
}

.title {
  margin-top: 100px;
  margin-left: 50px;
  margin-bottom: 20px;
  font-size: 70px;
  color: var(--primary-color);
}

.page-description {
  margin: 70px 50px;
  font-size: 20px;
  color: var(--secondary-variant-color);
}
</style>
