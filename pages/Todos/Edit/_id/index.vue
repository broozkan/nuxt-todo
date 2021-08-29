<template>
  <div class="container">
    <Navbar />
    <h1>Edit task</h1>
    <form @submit.prevent="updateTodo" method="POST">
      <FormTodo :todo="todo" />
      <div class="form-group">
        <button class="btn btn-default" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import FormTodo from "../../../../components/FormTodo.vue";
import Navbar from "../../../../components/Navbar.vue";
export default {
  name: "EditTodo",
  components: {
    FormTodo,
    Navbar,
  },
  data() {
    return {
      todo: JSON.parse(
        JSON.stringify(this.$store.getters.getTodoById(this.$route.params.id))
      ),
    };
  },
  methods: {
    ...mapActions(["putTodo"]),
    updateTodo() {
      this.putTodo({
        id: this.todo.id,
        title: this.todo.title,
        is_done: this.todo.is_done,
      });
    },
  },
};
</script>

<style>
</style>