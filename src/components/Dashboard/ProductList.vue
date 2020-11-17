<template>
  <div class="product-list-container">
    <SearchProduct />
    <div class="product-list">
      <div v-for="product in getAllProducts" :key="product.id">
        <Product :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";
import SearchProduct from "@/components/Dashboard/SearchProduct.vue";
import { mapGetters } from "vuex";

export default {
  name: "ProductList",
  components: {
    Product,
    SearchProduct,
  },
  computed: {
    ...mapGetters(["getAllProducts"]),
  },
};
</script>

<style scoped>
.product-list-container {
  width: 67%;
  background: #ffffff;
  box-shadow: 4px 4px 2px 0px rgba(0, 0, 0, 0.5);
  height: 80%;
  padding: 1.4rem;
  border-radius: 12px;
}

.product-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.5rem;
}

@media (max-width: 1064px) {
  .product-list-container {
    width: 60%;
  }
  .product-list {
    grid-template-columns: 1fr 1fr;
  }
}
</style>