import {FILTER_STAR_RATINGS,DELETE_CART} from './action'
// import {saveData} from '../Login/localstorage'

const initState=({    
   star:0
})


const cartReducer=(state=initState,{type,payload})=>{
    console.log(payload)
    switch(type){
        case FILTER_STAR_RATINGS:
            return{
                star:payload
            }
        case DELETE_CART:
            return{
                ...state,
                cart:state.cart.filter((item)=>item.id!==payload),
                total:state.cart.filter((item)=>item.id!==payload).length
            }
        
        default:
            return{
                ...state
            }
    }
}

export default cartReducer