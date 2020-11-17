<template>
  <div class="history-list-container">
    <div class="wrapper">
      <HistoryList />
    </div>
  </div>
</template>

<script>
import HistoryList from "@/components/History/HistoryList.vue";

export default {
  name: "HistoryView",
  components: {
    HistoryList: HistoryList,
  },
};
</script>

<style scoped>
.history-list-container {
  background-color: rgb(248, 248, 248);
  max-width: 100vw;
  height: 100vh;
  padding: 2rem 4rem;
}
</style>