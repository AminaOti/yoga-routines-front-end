<template>
  <div>
    <header>
      <a>{{ this.websiteTitle }}</a>

      <a
        class="page-links"
        v-on:click="linkToHomePage"
        data-test="home-page-link"
      >
        Home Page
      </a>
    </header>
  </div>
</template>

<script>
import "../assets/styles/theme-colors.scss";
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

<style scoped>
* {
  color: var(--secondary-variant-color);
  background-color: var(--primary-color);
  padding: 7px 10px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page-links:hover {
  color: var(--secondary-color);
}
</style>
