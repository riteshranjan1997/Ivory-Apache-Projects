import React from 'react'
import Styled from 'styled-components'

const BannerWrapper = Styled.div`
      height:170px;
      img{
          height:170px;
          width:100%;
          z-index:10;
      }

`
const BackArrow=Styled.div`
      border : none;
      position:absolute;
      top : 20px;
      left:160px;
      z-index:1;

      i{
          background :#2B8282;
          border-radius:50%;
          font-size:40px;
          color:white;
      }
`
const SaveRestaurent = Styled.div`
    border : none;
    position:absolute;
    top : 20px;
    right:160px;
    z-index:1;
    background:white;
    border-radius:50%;

    i{
        background :#2B8282;
        
        font-size:40px;
        color:white;
    }
`

function RestaurentMenuItemTopBanner(){
    return(
        <BannerWrapper>
            <img src = "https://res.cloudinary.com/grubhub-assets/image/upload/f_auto,fl_lossy,q_85/v1517936006/MOB_SL_FallbackWallpaper_watjdr.png" alt = "ImageBanner"/>
            <BackArrow>
                <i class="fas fa-chevron-circle-left"></i>
            </BackArrow>
            <SaveRestaurent>
                <i class="far fa-bookmark"></i>
            </SaveRestaurent>
        </BannerWrapper>
    )
}

export default RestaurentMenuItemTopBanner