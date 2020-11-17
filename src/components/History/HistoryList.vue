<template>
  <div class="item-wrapper">
    <div v-for="history in getAllHistory" :key="history.id" class="history">
      <HistoryItem :history="history" />
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
</style>