<template>
  <div :class="['alert', todo.is_done ? 'alert-success' : 'alert-danger']">
    <h6 class="title">{{ todo.title }}</h6>
    <p v-if="todo.is_done">Completed</p>
    <p v-else>Uncompleted</p>
    <div class="float-right">
      <NuxtLink :to="`todos/edit/${todo.id}`">Edit</NuxtLink>
      <DeleteButton :id="todo.id" />
    </div>
  </div>
</template>
<script>
import DeleteButton from "../components/DeleteButton.vue";
export default {
  name: "Todo",
  components: {
    DeleteButton,
  },
  props: {
    todo: {
      id: Number,
      title: String,
      is_done: Boolean,
    },
  },
};
</script>
