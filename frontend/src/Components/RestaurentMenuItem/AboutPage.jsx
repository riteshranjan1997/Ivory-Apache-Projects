import React from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
// import data from '../../data.json'

function AboutPage(){
    const ParamsId =useParams()
    const restaurantsData = useSelector((state)=>state.app.restaurantsData)
    const data = restaurantsData.find(item =>item.restaurant_id == ParamsId.id)

    return(
        <div>
          
                <div style={{width:"1000px"}}>
                    <div><h4><b>{data.restaurant_name}</b></h4></div>
                    <div style={{display:"flex"}}>{data.cuisines.map(item=>(<div style={{fontSize:"12px",color:"#2B8282"}}>{item}</div>))}</div>
                    <div>₹<span className="text-muted">₹₹₹₹</span></div>
                    <div style={{fontSize:"12px"}}>flawless generally charges restaurants a commission of 10% to go toward the cost of providing delivery services.</div>
                    <div style={{display:"flex"}}>
                        <div><img src="https://via.placeholder.com/600x300" alt="map"/></div>
                        <div style={{marginLeft:"30px",width:"300px"}}>
                            <div style={{backgroundColor:"lightgrey",padding:"20px"}}><h6 style={{marginLeft:"10px"}}><b>Hours</b></h6></div>
                            <div>
                                <div>Today</div>
                                <div>Delivary:6.00am-2.00am</div>
                            </div>
                            <hr/>
                            <div>See the full schedule</div>
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default AboutPage