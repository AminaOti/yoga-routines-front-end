<template>
  <div>
    <h1>Routines</h1>
    <li v-for="routine in routines" :key="routine.title">
      <h3>{{ routine.title }}</h3>
    </li>
  </div>
</template>

<script>
export default {
  name: "Routines",
  data: () => ({
    routines: [
      {
        title: "Slide #1",
      },
      {
        title: "Slide #2",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
