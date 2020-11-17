<template>
  <form class="search-form">
    <input class="search-input" type="text" placeholder="Search Product..." />
  </form>
</template>

<script>
export default {
  name: "SearchProduct",
};
</script>

<style scoped>
input[type="text"] {
  display: block;
  font-size: 1.3rem;
  font-family: inherit;
  border-radius: 4px;
  border: 2px solid #cecece;
  padding: 6px 12px;
  width: 40%;
  margin-bottom: 12px;
  outline-color: #91a2f6;
}

@media (max-width: 1064px) {
  input[type="text"] {
    width: 60%;
  }
}
</style>