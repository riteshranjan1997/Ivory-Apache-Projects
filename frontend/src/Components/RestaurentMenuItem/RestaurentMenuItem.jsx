import React from 'react'
import RestaurentMenuItemTopBanner from './RestaurentMenuItemTopBanner'
import RestaurentMenuItemDetails from './RestaurentMenuItemDetails'
import RestaurentMenuForAccessingContent from './RestaurentMenuForAccessingContent'

function RestaurentMenuItem(){
    return(
        <div >
            <div ><RestaurentMenuItemTopBanner/></div>           
            <div  > <RestaurentMenuItemDetails/></div>
            <div><RestaurentMenuForAccessingContent/></div>
            
        </div>
    )
}

export default RestaurentMenuItem