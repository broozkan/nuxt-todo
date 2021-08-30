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
  async fetch({ store, error }) {
    try {
      await store.dispatch("fetchTodos");
    } catch (e) {
      error({
        message: "Unable to fetch todos at this time. Please try again.",
      });
    }
  },
  computed: { ...mapState(["todos"]) },
  created() {
    console.log(this.todos);
  },
};
</script>