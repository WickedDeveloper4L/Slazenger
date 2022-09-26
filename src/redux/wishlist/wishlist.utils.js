export const addItemToWishlist = (wishlistItems, wishlistItemToAdd)=>{
    const exixtingWishlistItem = wishlistItems.find(wishlistitem => wishlistitem.id === wishlistItemToAdd.id);

    if(exixtingWishlistItem){
        return wishlistItems.map(wishlistitem => wishlistitem.id === wishlistItemToAdd.id ? {...wishlistitem} : wishlistitem)
    }

    return [...wishlistItems, {...wishlistItemToAdd}]
}

export const removeItemFromWishlist = (wishlistItems, wishlistItemToRemove)=>{
    const existingWishlistItem = wishlistItems.find(wishlistItem => wishlistItem.id === wishlistItemToRemove.id)

    if(existingWishlistItem){
        return wishlistItems.filter(wishlistItem => wishlistItem.id !== wishlistItemToRemove.id)
    }
}

