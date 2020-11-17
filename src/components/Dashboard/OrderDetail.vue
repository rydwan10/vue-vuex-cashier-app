<template>
  <div class="order-detail-container">
    <form v-on:submit="handleFormSubmit">
      <label for="invoice">Invoice</label>
      <input type="text" id="invoice" name="invoice" />
      <br />
      <label for="customer">Customer Name</label>
      <input type="text" id="customer" name="customer" />

      <div class="separator"></div>

      <div class="ordered-products">
        <ul v-if="getAllCart.length > 0">
          <li v-for="item in getAllCart" :key="item.id" class="item">
            <button
              v-on:click.prevent="deleteItemFromCart(item.id)"
              class="delete-item-button"
            >
              Delete
            </button>
            <div class="item-product">
              <p>{{ item.name }}</p>
              <p>${{ item.price }}</p>
            </div>
            <div class="item-buy">
              <p>qty: {{ item.qty }} kg</p>
              <p>sub total: ${{ item.subTotal }}</p>
            </div>
          </li>
        </ul>
        <div v-else class="no-item">No items...</div>
      </div>

      <div class="separator"></div>

      <label for="total-price">Total Price</label>
      <div class="input-wrapper">
        <span class="sign">$</span>
        <input
          readonly
          type="number"
          min="0"
          name="total-price"
          id="total-price"
          :value="getTotalPrice"
        />
      </div>
      <label for="pay">Pay</label>
      <div class="input-wrapper">
        <span class="sign">$</span>
        <input type="number" min="0" name="pay" id="pay" v-model="pay" />
      </div>
      <label for="change">Change</label>
      <span v-if="calculateTotal < 0" class="text-red"
        ><p>Payment is less than total price!</p></span
      >
      <div class="input-wrapper">
        <span class="sign">$</span>
        <input
          type="number"
          min="0"
          name="change"
          id="change"
          v-model="calculateTotal"
          :class="calculateTotal < 0 ? 'text-red' : ''"
        />
      </div>

      <label for="discount">Discount</label>
      <div class="input-wrapper">
        <span class="sign__percent">%</span>
        <input type="number" min="0" name="discount" id="discount" value="0" />
      </div>
      <label for="total">Total</label>
      <div class="input-wrapper total-wrapper">
        <span class="sign">$</span>
        <input type="number" min="0" name="total" id="total" />
      </div>
      <button
        :disabled="calculateTotal <= 0"
        type="submit"
        :class="
          calculateTotal <= 0
            ? 'continue-payment-button disabled-button'
            : 'continue-payment-button'
        "
      >
        Continue Payment
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "OrderDetail",

  data() {
    return {
      pay: null,
      change: null,
      total: null,
    };
  },
  methods: {
    handleFormSubmit: function (event) {
      event.preventDefault();
    },
    deleteItemFromCart: function (id) {
      this.$store.dispatch("DELETE_ITEM_FROM_CART", id);
    },
  },
  computed: {
    ...mapGetters(["getAllCart", "getTotalPrice"]),
    calculateTotal() {
      return this.pay - this.getTotalPrice;
    },
  },
};
</script>

<style scoped>
.order-detail-container {
  width: 30%;
  background: #ffffff;
  box-shadow: 4px 4px 2px 0px rgba(0, 0, 0, 0.5);
  height: 80%;
  padding: 1.7rem;
  border-radius: 12px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-size: 1.2rem;
}

.sign {
  font-weight: 400;
  font-size: 1.3rem;
  padding: 0.4rem;
}

.sign__percent {
  font-weight: 400;
  font-size: 1.3rem;
  padding: 0.2rem;
}

.input-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  background: #dedede;
  border-radius: 4px;
}

input[type="number"]#total {
  width: 87%;
}

.total-wrapper {
  background: #f3f0f0;
  height: 6rem;
}

input[type="text"] {
  display: block;
  font-size: 1.3rem;
  font-family: inherit;
  border: 2px solid #cecece;
  padding: 6px 12px;
  width: 100%;
  /* margin-bottom: 12px; */
  outline-color: #91a2f6;
  border-radius: 4px;
}
input[type="number"] {
  display: block;
  font-size: 1.3rem;
  font-family: inherit;
  border: 2px solid #cecece;
  padding: 6px 12px;
  width: 100%;
  /* margin-bottom: 12px; */
  outline-color: #91a2f6;
  border-radius: 4px;
}
.continue-payment-button {
  padding: 14px 25px;
  width: 100%;
  background-color: #51ff7b;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.4);
  margin-top: 1.3rem;
  font-size: 1rem;
}

.disabled-button {
  background-color: #d4d4d4;
  cursor: not-allowed;
}

.delete-item-button {
  color: #fff;
  border: 0;
  background: rgb(246, 38, 38);
  padding: 0.3rem 0.5rem;
  display: block;
  margin: 0 0 0.3rem auto;
  border-radius: 4px;
}

.delete-item-button:hover {
  background: rgb(250, 75, 75);
  cursor: pointer;
}

.item {
  list-style-type: none;
  margin-bottom: 1rem;
  border: 1px solid rgb(188, 188, 190);
  padding: 0.8rem;
  border-radius: 4px;
}

.item .item-product {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.6rem;
}

.item .item-buy {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
}

.separator {
  padding: 0.05rem;
  background: rgb(209, 209, 209);
  width: 100%;
  border-radius: 2px;
  margin: 1.2rem 0px;
}

.text-red {
  color: red;
}

@media (max-width: 1064px) {
  .order-detail-container {
    width: 36%;
  }
}
</style>