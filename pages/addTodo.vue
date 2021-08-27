<template>
  <div class="container">
    <Navbar />
    <FormAddTodo />
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import FormAddTodo from "../components/FormAddTodo.vue";

export default {
  name: "AddTodo",
  components: {
    FormAddTodo,
  },
};
</script>