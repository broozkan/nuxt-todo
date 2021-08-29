<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Todo App</a>
    <button class="navbar-toggler" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <NuxtLink class="nav-link" to="/todos/new">Add Todo</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/todos">List</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>


<style scoped>
navbar ul {
  list-style: none;
}

navbar ul li {
  padding: 1em;
  float: left;
}
</style>