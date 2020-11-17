<template>
  <div class="dashboard-container">
    <h1 class="greeting">Hello, Cashier!</h1>
    <div class="wrapper">
      <ProductList />
      <OrderDetail />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from "@/components/Dashboard/ProductList.vue";
import OrderDetail from "@/components/Dashboard/OrderDetail.vue";

export default {
  name: "Dashboard",
  components: {
    ProductList,
    OrderDetail,
  },
};
</script>

<style scoped>
.dashboard-container {
  background-color: rgb(248, 248, 248);
  max-width: 100vw;
  height: 100%;
  padding: 2rem 4rem;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.greeting {
  margin-bottom: 1rem;
}
</style>
