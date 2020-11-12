import {ADD_CART,DELETE_CART} from './action'
// import {saveData} from '../Login/localstorage'

const initState=({    
    isLoading:true,    
    isError:false,
    cart:[]
})


const cartReducer=(state=initState,{type,payload})=>{
    console.log(payload)
    switch(type){
        case ADD_CART:
            return{
                ...state,                
                isLoading:true,
                cart:[...state.cart,payload],
                total:[...state.cart,payload].length
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