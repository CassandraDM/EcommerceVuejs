import { ProductCard } from "./components/product-card.js";

const app = Vue.createApp({
    components:{
        'product-card':ProductCard
    },
    data() {
        return {
            title: 'EcommerceVuejs',
            productList: []
        }
    },
    mounted() {
        fetch('products.json')
            .then((response) => response.json())
            .then((data) => {
                this.productList = data;
            });
    }
}).mount("#app");