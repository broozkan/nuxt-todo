<template>
  <div class="container">
    <Navbar />
    <form @submit.prevent="newTodo" method="POST">
      <FormTodo :todo="todo" />
      <div class="form-group">
        <button class="btn btn-default" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
import Navbar from "../../../components/Navbar.vue";
import FormTodo from "../../../components/FormTodo.vue";
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  components: {
    FormTodo,
    Navbar,
  },
  data() {
    return {
      todo: {
        title: "",
        is_done: false,
      },
    };
  },

  methods: {
    ...mapActions(["addTodo"]),
    newTodo() {
      this.addTodo({
        id: Math.floor(Math.random() * 10000),
        title: this.todo.title,
        is_done: this.todo.is_done,
      });
    },
  },
};
</script>