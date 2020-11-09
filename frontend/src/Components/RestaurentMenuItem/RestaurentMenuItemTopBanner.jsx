import React from 'react'
import Styled from 'styled-components'

const BannerWrapper = Styled.div`
        position:relative;     
      img{
          height:170px;
          z-index:10;
          width:100vw;
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
    height:40px;
    width:40px;
    background:white;
    border-radius:50%;
    i{
        margin-top:10px;
        color:grey;
    }
`

const ShareRestaurent = Styled.div`
    border : none;
    position:absolute;
    top : 20px;
    right:100px;
    z-index:1;
    height:40px;
    width:40px;
    background:white;
    border-radius:50%;
    i{
        margin-top:10px;
        color:#2B8282;
        font-size:22px;
    }
`

const RestaurentIcon = Styled.div`
    width:max-content;    
    position:relative;
         top:-40px;
         left:80%;
    img{
               
        height:100px;
        width:100px;
        z-index:20;
    }

`

function RestaurentMenuItemTopBanner(){
    return(
        <div >
        <BannerWrapper>
            <img className="img-fluid" src = "https://res.cloudinary.com/grubhub-assets/image/upload/f_auto,fl_lossy,q_85/v1517936006/MOB_SL_FallbackWallpaper_watjdr.png" alt = "ImageBanner"/>
            <BackArrow>
                <i class="fas fa-chevron-circle-left"></i>
            </BackArrow>
            <SaveRestaurent>
                 <i class="fas fa-bookmark"></i>
            </SaveRestaurent>
            <ShareRestaurent>
                <i class="fas fa-share-alt"></i>
            </ShareRestaurent>
            <RestaurentIcon>
                <img src="https://via.placeholder.com/100"  alt="restaurentIcon"/>
            </RestaurentIcon>
        </BannerWrapper>
        </div>
    )
}

export default RestaurentMenuItemTopBanner