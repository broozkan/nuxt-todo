<template>
  <button class="btn btn-danger" @click="deleteTodo(id)" :todo-id="id">
    Delete
  </button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "DeleteButton",
  props: {
    id: Number,
  },
  methods: {
    ...mapActions(["deleteTodoById"]),
    deleteTodo(id) {
      this.deleteTodoById(id);
    },
  },
};
</script>

<style>
</style>