import { addItemToCart, removeItemFromCart } from "./cart.utils"
const cartActionTypes = {
    ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
    TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
    REMOVE_CART_ITEM: 'REMOVE_CART_ITEM',
    CLEAR_CART_ITEM: 'CLEAR_CART_ITEM'
}

export const addItem = item =>({
    type: cartActionTypes.ADD_ITEM_TO_CART,
    payload: item
})
export const removeItem = item =>({
    type: cartActionTypes.REMOVE_CART_ITEM,
    payload: item
})

export const clearCartItem= item =>({
    type: cartActionTypes.CLEAR_CART_ITEM,
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
            case cartActionTypes.REMOVE_CART_ITEM:
                return{
                    ...state,
                    cartItems: removeItemFromCart(state.cartItems, action.payload)
                }
            case cartActionTypes.CLEAR_CART_ITEM:
                return{
                    ...state,
                    cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
                }  
        default:
            return state;
    }
}