<template>
  <div class="card">
    <div class="card-invoice">
      {{ history.invoice }}
    </div>
    <div class="card-customer">
      {{ history.customerName }}
    </div>
    <div class="card-body">
      <ul>
        <li v-for="item in history.items" :key="item.id">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HistoryItem",
  props: ["history"],
};
</script>

<style scoped>
.card {
  background: #ffffff;
  box-shadow: 0px 4px 12px 1px rgba(0, 0, 0, 0.122);
  border-radius: 12px;
  padding: 1.2rem;
}

ul {
  list-style: none;
}

.card-invoice {
  font-weight: 700;
}

.card-body {
  margin-top: 12px;
}

.card:hover {
  box-shadow: 0 0 6px rgb(35 173 255);
  cursor: pointer;
}
</style>
