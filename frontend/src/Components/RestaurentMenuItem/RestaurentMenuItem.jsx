import React from 'react'
import RestaurentMenuItemTopBanner from './RestaurentMenuItemTopBanner'
import RestaurentMenuItemDetails from './RestaurentMenuItemDetails'
import RestaurentMenuForAccessingContent from './RestaurentMenuForAccessingContent'
import AppBar  from '../common/AppBar'

function RestaurentMenuItem(){
    return(
        <div style={{fontFamily: "Balsamiq Sans, cursive"}}>
            <AppBar />
            <div><RestaurentMenuItemTopBanner/></div>           
            <div> <RestaurentMenuItemDetails/></div>
            <div><RestaurentMenuForAccessingContent/></div>
        </div>
    )
}

export default RestaurentMenuItem