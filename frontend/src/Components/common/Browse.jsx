import React from "react";
import Styled from 'styled-components'
// import styles from "./Browse.module.css"

const BrowswWrapper=Styled.div`
    .scrollmenu{
        width:200px;
        display:flex;
        background-color: black;
        overflow: auto;
        white-space: nowrap;
    }
    
`

function Browse(){
    return(
        <BrowswWrapper>
            <div class="scrollmenu">
                <div>
                    <div style={{background:"#2B8282",height:"100px",width:"100px",borderRadius:"50%"}}><i class="fas fa-utensils" style={{fontSize:"40px",color:"white",position:"relative",top:"20px"}}></i>  </div>
                    <div>all restaurents</div>
                  </div>
                  <div>
                <div><img src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/lunch-specials-v4.jpg" alt="JPEG" style={{height:"100px",width:"100px",borderRadius:"50%",objectFit:"cover"}}/></div>
                <div>deserts</div>
            </div>
            <div>
                <div><img src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/lunch-specials-v4.jpg" alt="JPEG" style={{height:"100px",width:"100px",borderRadius:"50%",objectFit:"cover"}}/></div>
                <div>Lunch Specials</div>
             </div>
             <div>
                    <div><img src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/lunch-specials-v4.jpg" alt="JPEG" style={{height:"100px",width:"100px",borderRadius:"50%",objectFit:"cover"}}/></div>
                    <div>Lunch Specials</div>
                </div>
                <div>
                    <div><img src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/lunch-specials-v4.jpg" alt="JPEG" style={{height:"100px",width:"100px",borderRadius:"50%",objectFit:"cover"}}/></div>
                    <div>Lunch Specials</div>
                </div>
                <div>
                    <div><img src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/lunch-specials-v4.jpg" alt="JPEG" style={{height:"100px",width:"100px",borderRadius:"50%",objectFit:"cover"}}/></div>
                    <div>Lunch Specials</div>
                </div>
                <div>
                  <div><img src="https://media-cdn.grubhub.com/d_search:browse-images:default.jpg/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/lunch-specials-v4.jpg" alt="JPEG" style={{height:"100px",width:"100px",borderRadius:"50%",objectFit:"cover"}}/></div>
                  <div>Lunch Specials</div>
              </div>
            </div>
            
        </BrowswWrapper>
    )
}

export default Browse