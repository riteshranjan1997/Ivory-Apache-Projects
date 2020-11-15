import {GIO_LOCATION_REQUEST,GIO_LOCATION_SUCCESS,GIO_LOCATION_FAILURE } from './action'

const initState = {
    isLoading : false,
    coordinates:[],
    islocationError :false,
}


const locationReducer = ( state = initState , { type , payload }) =>{
    switch( type ){
        case GIO_LOCATION_REQUEST :
            return {
                ...state,
                isLoading : true,
                islocationError :false
            }
         case GIO_LOCATION_SUCCESS :          
             return {
                 ...state,
                isLoading : false,
                coordinates:payload,
                islocationError :false
             } 
          case GIO_LOCATION_FAILURE :
              return {
                 ...state,
                 isLoading : false,
                 islocationError :true
              } 
            default :
            return {...state }  

    }
}

export default locationReducer