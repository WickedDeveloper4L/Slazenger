import { addItemToCart } from "./cart.utils"
const cartActionTypes = {
    ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
    TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN'
}

export const addItem = item =>({
    type: cartActionTypes.ADD_ITEM_TO_CART,
    payload: item
})

export const toggleCartHidden = () =>({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
})


const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

export const cartReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case cartActionTypes.ADD_ITEM_TO_CART:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
    
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }   
        default:
            return state;
    }
}