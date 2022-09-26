import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart.reducer";
import { userReducer } from "./user/user.reducer";
import { wishlistReducer } from "./wishlist/wishlist.reducer";


export default  combineReducers({
    user: userReducer,
    cart: cartReducer,
    wishlist: wishlistReducer
})