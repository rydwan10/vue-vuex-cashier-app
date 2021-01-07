<template>
  <div>
    <span class="title">History List</span>
    <div class="item-wrapper">
      <div v-for="history in getAllHistory" :key="history.id" class="history">
        <HistoryItem :history="history" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HistoryItem from "./HistoryItem.vue";

export default {
  name: "HistoryList",
  components: {
    HistoryItem: HistoryItem,
  },
  computed: {
    ...mapGetters(["getAllHistory"]),
  },
};
</script>

<style scoped>
.title {
  display: block;
  font-weight: 700;
  font-size: 2.1rem;
  margin-bottom: 1.3rem;
}
.item-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
}
</style>
