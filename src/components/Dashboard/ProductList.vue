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
  box-shadow: 0px 4px 12px 1px rgba(0, 0, 0, 0.122);
  height: 80%;
  padding: 1.8rem;
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