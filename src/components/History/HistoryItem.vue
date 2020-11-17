<template>
  <div class="card">
    {{ history.customerName }}
    {{ history.id }}

    <ul>
      <li v-for="item in history.items" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HistoryItem",
  props: ["history"],
};
</script>

<style>
</style>