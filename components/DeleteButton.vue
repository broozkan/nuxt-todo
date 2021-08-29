<template>
  <button class="btn btn-danger" @click="deleteTodo" :todo-id="id">
    Delete
  </button>
</template>

<script>
export default {
  name: "DeleteButton",
  props: {
    id: Number,
  },
  methods: {
    deleteTodo() {
      console.log("Deleted");
    },
  },
};
</script>

<style>
</style>