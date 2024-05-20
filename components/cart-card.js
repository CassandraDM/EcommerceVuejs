export const CartCard = {
  props: {
    id: Number,
    price: Number,
    src: String,
    name: String,
  },
  template: `
    <div :key="id" class="cart-container">
        <div class="cart-content">
            <div class="image-container">        
                <img :src="src" alt="" class="cart-image" >
            </div>
            <div class="text-content">
                <div class= "cart-name">
                    <p>{{ name }}</p>
                </div>
                <div class="cart-price">                
                    <p >{{ price }} €</p>
                </div>
            </div>
            <button class="trash-button" @click="$emit('removeFromCart')"> <i class="fa-solid fa-trash" ></i></button>
        </div>
    </div>  
    `,
};
