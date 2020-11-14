
export const FILTER_STAR_RATINGS=" FILTER_STAR_RATINGS"
export const DELETE_CART="DELETE_CART"


export const filterStarRatings=(payload)=>({  
    type:FILTER_STAR_RATINGS,
    payload
})

export const deleteCart=(payload)=>({
   type:DELETE_CART,
    payload
})

