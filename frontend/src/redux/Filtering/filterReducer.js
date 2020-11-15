import {FILTER_STAR_RATINGS,SORT_DATA_BY} from './action'
// import {saveData} from '../Login/localstorage'

const initState=({    
   star:0,
   sort:""
})


const filterReducer=(state=initState,{type,payload})=>{
    switch(type){
        case FILTER_STAR_RATINGS:
            return{
                ...state,
                star:payload
            }
        case SORT_DATA_BY:
            return{
                ...state,
                sort:payload
            }
        
        default:
            return{
                ...state
            }
    }
}

export default filterReducer