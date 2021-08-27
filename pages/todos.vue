<template>
  <div class="container">
    <Navbar />
    <h1>Todo list</h1>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "TodoList",
  components: {
    Navbar,
  },
};
</script>