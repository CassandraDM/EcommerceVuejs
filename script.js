import { ProductCard } from "./components/product-card.js";
import { CartCard } from "./components/cart-card.js";

const app = Vue.createApp({
  components: {
    "product-card": ProductCard,
    "cart-card": CartCard,
  },
  data() {
    return {
      productList: [],
      cartItems: [],
    };
  },
  computed: {
    addToFavorite() {
      return this.productList.some((product) => product.like);
    },
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    },
  },
  mounted() {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => {
        this.productList = data;
      });
  },
}).mount("#app");
