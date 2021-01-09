<template>
  <div class="order-detail-container">
    <form v-on:submit.prevent="handleFormSubmit">
      <label for="invoice">Invoice Number</label>
      <input type="text" id="invoice" name="invoice" :value="generateInvoice" />
      <br />
      <label for="customer">Customer Name</label>
      <input type="text" id="customer" name="customer" />

      <div class="separator"></div>

      <div class="ordered-products">
        <div v-if="getAllCart.length > 0" class="clear-cart-button-wrapper">
          <button class="clear-cart-button" @click.prevent="clearCart">
            Clear Cart
          </button>
        </div>
        <ul v-if="getAllCart.length > 0">
          <li v-for="item in getAllCart" :key="item.id" class="item">
            <button
              v-on:click.prevent="deleteItemFromCart(item.id)"
              class="delete-item-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-trash-2"
              >
                <polyline points="3 6 5 6 21 6" />
                <path
                  d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
              </svg>
            </button>
            <div class="item-product">
              <p class="item-name">{{ item.name }}</p>
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
      <div class="total-items">Total Items: {{ getAllCart.length }}</div>

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
        <input
          :readonly="getAllCart.length <= 0"
          type="number"
          min="0"
          name="pay"
          id="pay"
          v-model="pay"
        />
      </div>
      <label for="change">Change</label>
      <span v-if="calculateTotal < 0" class="text-red"
        ><p>Payment is less than total price!</p></span
      >
      <div class="input-wrapper">
        <span class="sign">$</span>
        <input
          readonly
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
        <input
          :readonly="getAllCart.length <= 0"
          type="number"
          min="0"
          name="discount"
          id="discount"
          v-model="discount"
        />
      </div>
      <label for="total">Total</label>
      <div class="input-wrapper total-wrapper">
        <span class="sign">$</span>
        <input
          type="number"
          min="0"
          name="total"
          id="total"
          :value="calculateTotalWithDiscount"
        />
      </div>
      <button
        :disabled="calculateTotal < 0 || getAllCart.length <= 0"
        type="submit"
        :class="
          calculateTotal < 0 || getAllCart.length <= 0
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
import moment from "moment";

export default {
  name: "OrderDetail",

  data() {
    return {
      pay: null,
      change: null,
      total: null,
      discount: 0,
    };
  },
  methods: {
    handleFormSubmit: function(event) {
      event.preventDefault();
    },
    deleteItemFromCart: function(id) {
      this.$store.dispatch("DELETE_ITEM_FROM_CART", id);
    },
    clearCart: function() {
      this.$store.dispatch("CLEAR_CART");
    },
  },
  computed: {
    ...mapGetters(["getAllCart", "getTotalPrice", "getAllHistory"]),

    calculateTotal: function() {
      return this.pay - this.getTotalPrice;
    },
    generateInvoice: function() {
      const today = moment().format("yyyyMMDD");
      let leadingZeros = "";

      const latestInvoiceDate = this.getAllHistory[
        this.getAllHistory.length - 1
      ].invoice.substring(3, 11);

      const latestInvoiceCount = this.getAllHistory[
        this.getAllHistory.length - 1
      ].invoice.substring(11);

      let intLatestInvoiceCount = parseInt(latestInvoiceCount);

      if (today == latestInvoiceDate) {
        intLatestInvoiceCount += 1;
      } else {
        intLatestInvoiceCount = 1;
      }

      let strLatestInvoiceCount = intLatestInvoiceCount.toString();

      switch (strLatestInvoiceCount.length) {
        case 1:
          // console.log("case 1");
          leadingZeros = "000000";
          break;
        case 2:
          // console.log("case 2");
          leadingZeros = "00000";
          break;

        case 3:
          // console.log("case 3");
          leadingZeros = "0000";
          break;

        case 4:
          // console.log("case 4");
          leadingZeros = "000";
          break;

        case 5:
          // console.log("case 5");
          leadingZeros = "00";
          break;

        case 6:
          // console.log("case 6");
          leadingZeros = "0";
          break;

        case 7:
          // console.log("case 7");
          leadingZeros = "";
          break;

        default:
          leadingZeros = "";
          break;
      }

      // 1. Jika tanggal invoice yang terakhir ditambahkan sama dengan tanggal sekarang, maka tambahkan counter #000001 #000002 dst
      // 2. Jika tanggal nya beda alias baru invoice diulang dari awal

      let invoice = `INV${today}${leadingZeros}${intLatestInvoiceCount}`;
      return invoice;
    },
    calculateTotalWithDiscount: function() {
      let discountTotal = (this.getTotalPrice * this.discount) / 100;
      let totalWithDiscount = this.getTotalPrice - discountTotal;
      console.log(discountTotal, totalWithDiscount);
      return totalWithDiscount;
    },
  },
};
</script>

<style scoped>
.order-detail-container {
  width: 30%;
  background: #ffffff;
  box-shadow: 0px 4px 12px 1px rgba(0, 0, 0, 0.122);
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
  font-size: 1.2rem;
  padding: 0.4rem;
}

.sign__percent {
  font-weight: 400;
  padding: 0.2rem;
  font-size: 1.2rem;
}

.input-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  background: #ebebeb;
  border-radius: 4px;
}

input[type="number"]#total {
  width: 100%;
}

.total-wrapper {
  background: #ebebeb;
}

input[type="text"] {
  display: block;
  font-size: 1.1rem;
  font-family: inherit;
  border: 1px solid #cecece;
  padding: 6px 12px;
  width: 100%;
  outline-color: #91a2f6;
  border-radius: 4px;
}
input[type="number"] {
  display: block;
  font-size: 1.1rem;
  font-family: inherit;
  border: 1px solid #cecece;
  padding: 6px 12px;
  width: 100%;
  outline-color: #91a2f6;
  border-radius: 4px;
}
.continue-payment-button {
  padding: 14px 25px;
  width: 100%;
  background-color: #1dfd53;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 1.3rem;
  font-size: 1.1rem;
}

.disabled-button {
  background-color: #d4d4d4;
  cursor: not-allowed;
}

.clear-cart-button-wrapper {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 12px;
}

.delete-item-button {
  color: #fff;
  border: 0;
  background: rgb(246, 38, 38);
  padding: 0.3rem 0.8rem;
  display: block;
  margin: 0 0 0.8rem auto;
  border-radius: 4px;
}

.delete-item-button:hover {
  background: rgb(250, 75, 75);
  cursor: pointer;
}

.clear-cart-button {
  color: #fff;
  border: 0;
  background: rgb(246, 38, 38);
  padding: 0.3rem 0.5rem;
  border-radius: 4px;
}

.clear-cart-button:hover {
  cursor: pointer;
  background: rgb(253, 17, 17);
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

.item-name {
  font-size: 1.5rem;
}

.separator {
  padding: 1px;
  background: rgb(228, 228, 228);
  width: 100%;
  margin: 1.2rem 0px;
}

.text-red {
  color: red;
}

.total-items {
  font-size: 1.1rem;
  font-weight: bold;
  padding-top: 1rem;
}

@media (max-width: 1064px) {
  .order-detail-container {
    width: 36%;
  }
}
</style>
