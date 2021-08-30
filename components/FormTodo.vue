<template>
  <div>
    <div class="form-group">
      <label for="exampleInputEmail1">To Do Title</label>
      <input
        id="title"
        v-model="todo.title"
        type="text"
        name="title"
        class="form-control"
        placeholder="Type to do title"
        required
      />
    </div>
    <div class="form-check">
      <input
        v-model="todo.is_done"
        type="checkbox"
        data-testid="is_done"
        name="is_done"
        class="form-check-input"
        id="exampleCheck1"
      />
      <label class="form-check-label" for="exampleCheck1">Completed</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormTodo",
  props: {
    todo: {
      title: String,
      is_done: Boolean,
    },
  },
};
</script>