export const ProductCard = {
    props: {
        id: Number,
        price: Number,
        src: String,
    },
    template:`
    <div :key="id" >
        <div class="product-content">
            <img :src="src" alt="" class="product-image" >
            <div class="product-price">                
                <p >{{ price }} €</p>
            </div>
        </div>
        <div class="button-container">
            <button class="favorite-button" >
                <i class="fa-regular fa-heart" style="color: #ffffff;"></i>
            </button>
            <button class="cart-button"><i class="fa-solid fa-cart-shopping" style="color: #ffffff;"></i></button>
        </div>
    </div>  
    `
}