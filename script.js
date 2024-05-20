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
    computed: {
        addToFavorite() {
            return this.productList.some((product) => product.like);
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