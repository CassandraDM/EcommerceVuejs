const app = Vue.createApp({
    data() {
        return {
            title: 'EcommerceVuejs',
            productList: [
                {
                    
                    favorite: false
                },
            ]
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