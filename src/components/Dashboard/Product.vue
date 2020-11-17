<template>
  <div class="card-list">
    <div class="card">
      <div class="card-header">
        <img src="../../assets/logo.png" alt="vue-image" width="64px" />
      </div>
      <div class="card-body">
        <div class="card-title">
          <p>{{ product.name }}</p>
          <p class="product-price">$ {{ product.price }}/kg</p>
        </div>

        <div class="card-button-control">
          <button
            :disabled="qty <= 0"
            v-on:click="decrement"
            :class="qty <= 0 ? 'button-disabled' : 'min-button'"
          >
            -
          </button>
          <input
            @keyup.enter="addToCart(product)"
            type="number"
            name="buy-qty"
            class="buy-qty"
            v-model="qty"
            min="0"
          />
          <button v-on:click="increment" class="plus-button">+</button>
        </div>
        <div class="sub-total-wrapper">
          <span class="sub-total" v-if="calcSubTotal(product.price) > 0">
            ${{ calcSubTotal(product.price) }}</span
          >
          <span v-else></span>
        </div>
      </div>
      <div class="card-footer">
        <button
          :class="qty <= 0 ? 'add-item-button-disabled' : 'add-item-button'"
          :disabled="qty <= 0"
          v-on:click="addToCart(product)"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  name: "Product",
  data() {
    return {
      qty: 0,
    };
  },
  methods: {
    increment: function () {
      this.qty = this.qty += 1;
    },
    decrement: function () {
      this.qty = this.qty -= 1;
    },
    calcSubTotal: function (price) {
      return this.qty * price;
    },

    // Dispatch actions here...
    addToCart: function (product) {
      if (this.qty == 0) {
        return;
      }

      let subTotal = this.qty * product.price;
      const payload = {
        productId: product.id,
        name: product.name,
        price: product.price,
        qty: this.qty,
        subTotal: subTotal,
      };
      this.$store.dispatch("ADD_TO_CART", payload);
      this.qty = 0;
    },
  },
};
</script>

<style scoped>
.card-list {
  margin-top: 1rem;
}
.card {
  box-shadow: 0px 4px 7px 1px rgba(0, 0, 0, 0.2);
  padding: 1.2rem 0px 0.4rem;
  border-radius: 6px;
}

.card-header {
  text-align: center;
  height: 6rem;
}

.product-price {
  font-size: 1.2rem;
  color: rgb(112, 112, 112);
}

.card-body {
  width: 100%;
  padding: 1rem 0;
}

.card-title {
  text-align: left !important;
  padding: 0.8rem;
  font-weight: 500;
  font-size: 1.3rem;
}

.card-button-control {
  display: flex;
  padding: 0.8rem;
  justify-content: space-between;
}

.buy-qty {
  width: 50%;
  border-radius: 6px;
  border: 1px solid #a3a5af;
  font-size: 1.6rem;
  text-align: center;
  outline-color: #91a2f6;
}

.min-button,
.plus-button {
  padding: 7px 16px;
  font-size: 1.4rem;
  border-radius: 6px;
  border: none;
  color: #ffffff;
  background: #3357fa;
}

.button-disabled {
  cursor: not-allowed;
  background: #bfbdbd;
  padding: 7px 16px;
  font-size: 1.4rem;
  border-radius: 6px;
  border: none;
  color: #ffffff;
}

.min-button:hover,
.plus-button:hover,
.add-item-button:hover {
  background: #8da0f7;
  cursor: pointer;
}

.card-footer {
  padding: 0.3rem 0.8rem;
}

.add-item-button {
  padding: 8px 16px;
  width: 100%;
  font-size: 1rem;
  background-color: #3357fa;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: normal;
}

.add-item-button-disabled {
  padding: 8px 16px;
  width: 100%;
  font-size: 1rem;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-weight: normal;
  cursor: not-allowed;
  background: #bfbdbd;
}

.sub-total-wrapper {
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  transition: 5s ease-in;
}

.sub-total {
  background: #f1f1f1;
  width: 50%;
  text-align: center;
  padding: 0.6rem 1.5rem;
  font-weight: 600;
  border-radius: 4px;
  border: 1.3px solid #91a2f6;
}
</style>