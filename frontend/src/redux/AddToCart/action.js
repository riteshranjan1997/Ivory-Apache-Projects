
export const ADD_CART=" ADD_CART"
export const DELETE_CART="DELETE_CART"


export const addCart=(payload)=>({  
    type:ADD_CART,
    payload
})

export const deleteCart=(payload)=>({
   type:DELETE_CART,
    payload
})

