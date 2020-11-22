import React from 'react'
import RestaurentMenuItemTopBanner from './RestaurentMenuItemTopBanner'
import RestaurentMenuItemDetails from './RestaurentMenuItemDetails'
import RestaurentMenuForAccessingContent from './RestaurentMenuForAccessingContent'
import AppBar  from '../common/AppBar'
import { Redirect } from "react-router-dom"
import { useSelector,useDispatch } from 'react-redux';


function RestaurentMenuItem(){
    const isAuth = useSelector((state) => state.auth.isAuth);

    if(!isAuth){
      <Redirect to ="/" />
    }
  
    return(
        <div style={{fontFamily: "Balsamiq Sans, cursive"}}>
            <AppBar  notifications="true" login/>
            <div><RestaurentMenuItemTopBanner/></div>           
            <div> <RestaurentMenuItemDetails/></div>
            <div><RestaurentMenuForAccessingContent/></div>
        </div>
    )
}

export default RestaurentMenuItem