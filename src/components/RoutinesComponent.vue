<template>
  <div>
    <h1>Routines</h1>
    <li v-for="routineTitle in routineTitles" :key="routineTitle">
      <h3>{{ routineTitle }}</h3>
    </li>
  </div>

  <div class="card-container">
    <div class="flex md6 lg4">
      <va-card
        square
        outlined
        href="https://vuestic.epicmax.co/"
        target="_blank"
      >
        <va-image src="https://picsum.photos/400/200" style="height: 200px" />
        <va-card-title>Title</va-card-title>
        <va-card-content
          >Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.</va-card-content
        >
      </va-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Routines",
  data: () => ({
    routineTitles: ["hello"],
  }),
  methods: {
    async getRoutineTitles() {
      const url = `${process.env.VUE_APP_YOGA_API_URL}routines`;
      try {
        const response = await axios.get(url);
        this.routineTitles = response.data.data.map((routine) => routine.title);
      } catch (error) {
        console.log(error);
      }
    },
  },
  beforeMount() {
    this.getRoutineTitles();
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  margin-left: 10px;
  height: 500px;
  width: 250px;
}
</style>
