<template>
  <div class="container">
    <Navbar />
    <h1>Todo list</h1>
    <Todo v-for="(todo, index) in todos" :key="index" :todo="todo" />
  </div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import Todo from "../../components/Todo.vue";
import { mapState } from "vuex";

export default {
  name: "TodoList",
  components: {
    Navbar,
    Todo,
  },
  computed: { ...mapState(["todos"]) },
  created() {
    console.log(this.todos);
  },
};
</script>