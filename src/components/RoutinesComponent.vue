<template>
  <div>
    <h1>Routines</h1>
    <li v-for="routineTitle in routineTitles" :key="routineTitle">
      <h3>{{ routineTitle }}</h3>
    </li>
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

<style lang="scss" scoped></style>
