import { addItemToWishlist, removeItemFromWishlist } from "./wishlist.utils"

const wishlistActionTypes = {
    ADD_ITEM_TO_WISHLIST: 'ADD_ITEM_TO_WISHLIST',
    REMOVE_ITEM_FROM_WISHLIST: 'REMOVE_ITEM_FROM_WISHLIST',
    CLEAR_WISHLIST: 'CLEAR_WISHLIST'
}

export const wishItem = item =>({
    type: wishlistActionTypes.ADD_ITEM_TO_WISHLIST,
    payload: item
})

export const removeItem = item => ({
    type: wishlistActionTypes.REMOVE_ITEM_FROM_WISHLIST,
    payload: item
})

const INITIAL_STATE = {
    wishlistItems: []
}


export const wishlistReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case wishlistActionTypes.ADD_ITEM_TO_WISHLIST:
            return{
                ...state,
                wishlistItems: addItemToWishlist(state.wishlistItems, action.payload)
            }
            
        case wishlistActionTypes.REMOVE_ITEM_FROM_WISHLIST:
                return{
                    ...state,
                    wishlistItems: removeItemFromWishlist(state.wishlistItems, action.payload)
                }
        default:
            return state;
    }
}