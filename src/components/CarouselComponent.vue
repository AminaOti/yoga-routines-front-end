<template>
  <div>
    <vueper-slides :visible-slides="3" slide-multiple :gap="3">
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :title="slide.title"
        :content="slide.content"
        class="vueper-slide"
      >
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import "../assets/styles/theme-colors.scss";

export default {
  components: { VueperSlides, VueperSlide },

  data: () => ({
    slides: [
      {
        title: "Slide #1",
        content: "Slide 1 content.",
      },
      {
        title: "Slide #2",
        content: "Slide 2 content.",
      },
      {
        title: "Slide #3",
        content: "Slide 3 content.",
      },
      {
        title: "Slide #4",
        content: "Slide 4 content.",
      },
      {
        title: "Slide #5",
        content: "Slide 5 content.",
      },
      {
        title: "Slide #6",
        content: "Slide 6 content.",
      },
      {
        title: "Slide #7",
        content: "Slide 7 content.",
      },
      {
        title: "Slide #8",
        content: "Slide 8 content.",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.vueper-slide {
  background-color: var(--secondary-variant-color);
}
</style>
