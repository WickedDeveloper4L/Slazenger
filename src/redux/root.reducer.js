import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart.reducer";
import { userReducer } from "./user/user.reducer";
import { wishlistReducer } from "./wishlist/wishlist.reducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'wishlist']
}
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    wishlist: wishlistReducer
});

export default persistReducer(persistConfig, rootReducer)