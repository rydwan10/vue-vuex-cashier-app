import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from "uuid";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    products: [
      { id: uuidv4(), name: "Mackerel", price: 100, image: "mackerel.jpg" },
      { id: uuidv4(), name: "Sardines", price: 200, image: "sardines.jpg" },
      { id: uuidv4(), name: "Tuna", price: 300, image: "tuna.png" },
      { id: uuidv4(), name: "Prawns", price: 400, image: "prawns.jpg" },
      { id: uuidv4(), name: "Crab", price: 400, image: "crab.jpg" },
      { id: uuidv4(), name: "Squid", price: 400, image: "squid.jpg" },
    ],
    cart: [
      {
        id: uuidv4(),
        productId: uuidv4(),
        name: "Macarrel",
        price: 100,
        qty: 3,
        subTotal: 300,
      },
      {
        id: uuidv4(),
        productId: uuidv4(),
        name: "Sardines",
        price: 200,
        qty: 1,
        subTotal: 200,
      },
      {
        id: uuidv4(),
        productId: uuidv4(),
        name: "Crab",
        price: 400,
        qty: 3,
        subTotal: 1200,
      },
    ],
    history: [
      {
        id: uuidv4(),
        invoice: "INV202011020000001",
        customerName: "Muhammad Rydwan",
        items: [
          {
            id: uuidv4(),
            productId: uuidv4(),
            name: "Mackerel",
            price: 100,
            qty: 3,
            subTotal: 300,
          },
          {
            id: uuidv4(),
            productId: uuidv4(),
            name: "Sardines",
            price: 200,
            qty: 1,
            subTotal: 200,
          },
          {
            id: uuidv4(),
            productId: uuidv4(),
            name: "Crab",
            price: 400,
            qty: 3,
            subTotal: 1200,
          },
        ],
        totalPrice: 1700,
        pay: 2000,
        change: 300,
        discount: 0,
        total: 2000,
        createdAt: "2020-11-02",
      },
      {
        id: uuidv4(),
        invoice: "INV202011010000002",
        customerName: "Jhon Doe",
        items: [
          {
            id: uuidv4(),
            productId: uuidv4(),
            name: "Macarrel",
            price: 100,
            qty: 3,
            subTotal: 300,
          },
          {
            id: uuidv4(),
            productId: uuidv4(),
            name: "Sardines",
            price: 200,
            qty: 1,
            subTotal: 200,
          },
          {
            id: uuidv4(),
            productId: uuidv4(),
            name: "Crab",
            price: 400,
            qty: 3,
            subTotal: 1200,
          },
        ],
        totalPrice: 1700,
        pay: 2000,
        change: 300,
        discount: 0,
        total: 2000,
        createdAt: "2020-11-01",
      },
      {
        id: uuidv4(),
        invoice: "INV202011010000033",
        customerName: "Anon",
        items: [
          {
            id: uuidv4(),
            productId: uuidv4(),
            name: "Macarrel",
            price: 100,
            qty: 3,
            subTotal: 300,
          },
          {
            id: uuidv4(),
            productId: uuidv4(),
            name: "Sardines",
            price: 200,
            qty: 1,
            subTotal: 200,
          },
          {
            id: uuidv4(),
            productId: uuidv4(),
            name: "Crab",
            price: 400,
            qty: 3,
            subTotal: 1200,
          },
        ],
        totalPrice: 1700,
        pay: 2000,
        change: 300,
        discount: 0,
        total: 2000,
        createdAt: "2020-11-01",
      },
      {
        id: uuidv4(),
        invoice: "INV202011010000012",
        customerName: "Albert",
        items: [
          {
            id: uuidv4(),
            productId: uuidv4(),
            name: "Macarrel",
            price: 100,
            qty: 3,
            subTotal: 300,
          },
          {
            id: uuidv4(),
            productId: uuidv4(),
            name: "Sardines",
            price: 200,
            qty: 1,
            subTotal: 200,
          },
          {
            id: uuidv4(),
            productId: uuidv4(),
            name: "Crab",
            price: 400,
            qty: 3,
            subTotal: 1200,
          },
        ],
        totalPrice: 1700,
        pay: 2000,
        change: 300,
        discount: 0,
        total: 2000,
        createdAt: "2020-11-01",
      },
      {
        id: uuidv4(),
        invoice: "INV202101090000012",
        customerName: "Albert",
        items: [
          {
            id: uuidv4(),
            productId: uuidv4(),
            name: "Macarrel",
            price: 100,
            qty: 3,
            subTotal: 300,
          },
          {
            id: uuidv4(),
            productId: uuidv4(),
            name: "Sardines",
            price: 200,
            qty: 1,
            subTotal: 200,
          },
          {
            id: uuidv4(),
            productId: uuidv4(),
            name: "Crab",
            price: 400,
            qty: 3,
            subTotal: 1200,
          },
        ],
        totalPrice: 1700,
        pay: 2000,
        change: 300,
        discount: 0,
        total: 2000,
        createdAt: "2020-11-01",
      },
      {
        id: uuidv4(),
        invoice: "INV202101090000013",
        customerName: "Albert",
        items: [
          {
            id: uuidv4(),
            productId: uuidv4(),
            name: "Macarrel",
            price: 100,
            qty: 3,
            subTotal: 300,
          },
          {
            id: uuidv4(),
            productId: uuidv4(),
            name: "Sardines",
            price: 200,
            qty: 1,
            subTotal: 200,
          },
          {
            id: uuidv4(),
            productId: uuidv4(),
            name: "Crab",
            price: 400,
            qty: 3,
            subTotal: 1200,
          },
        ],
        totalPrice: 1700,
        pay: 2000,
        change: 300,
        discount: 0,
        total: 2000,
        createdAt: "2020-11-01",
      },
    ],
    searchKeyword: "",
  },
  getters: {
    getAllProducts: ({ products, searchKeyword }) => {
      if (searchKeyword == "") {
        return products;
      } else {
        return products.filter((product) => {
          return product.name.toLowerCase().includes(searchKeyword);
        });
      }
    },
    getAllCart: ({ cart }) => {
      return cart;
    },
    getTotalPrice: ({ cart }) => {
      let totalPrice = 0;
      cart.forEach((item) => {
        totalPrice += item.subTotal;
      });
      return totalPrice;
    },
    getAllHistory: ({ history }) => {
      return history;
    },
  },
  mutations: {
    addToCart: (state, payload) => {
      state.cart.push({ id: uuidv4(), ...payload });
    },
    deleteItemFromCart: (state, payload) => {
      let newCart = state.cart.filter((item) => {
        return item.id !== payload;
      });
      state.cart = [...newCart];
    },
    updateSearchQuery(state, payload) {
      state.searchKeyword = payload;
    },
    clearCart(state, payload) {
      if (window.confirm("Clear Cart?")) {
        state.cart = [];
      }
    },
  },
  actions: {
    ADD_TO_CART(context, payload) {
      context.commit("addToCart", payload);
    },
    DELETE_ITEM_FROM_CART: (context, payload) => {
      context.commit("deleteItemFromCart", payload);
    },
    UPDATE_SEARCH_KEYWORD: (context, payload) => {
      context.commit("updateSearchQuery", payload);
      console.log(context.state.searchKeyword);
    },
    CLEAR_CART: (context, payload) => {
      context.commit("clearCart");
    },
  },
  modules: {},
});
