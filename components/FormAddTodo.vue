<template>
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">testing</label>
      <input
        data-test="title"
        type="email"
        name="title"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
      <small id="emailHelp" class="form-text text-muted"
        >We'll never share your email with anyone else.</small
      >
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  name: "FormAddTodo",
};
</script>