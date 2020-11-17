<template>
  <form @submit.prevent class="search-form">
    <input
      @keyup="updateSearchKeyword"
      v-model="searchKeyword"
      class="search-input"
      type="text"
      placeholder="Search Product..."
    />
    <p>Search Keyword: {{ searchKeyword }}</p>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SearchProduct",
  data() {
    return {
      searchKeyword: "",
    };
  },
  methods: {
    updateSearchKeyword: function () {
      this.$store.dispatch("UPDATE_SEARCH_KEYWORD", this.searchKeyword);
    },
  },
};
</script>

<style scoped>
input[type="text"] {
  display: block;
  font-size: 1.3rem;
  font-family: inherit;
  border-radius: 4px;
  border: 1px solid #cecece;
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