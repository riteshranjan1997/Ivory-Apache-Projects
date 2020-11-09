import React, { useEffect } from 'react'
import axios from 'axios'
// import mapboxgl from 'mapbox-gl'

function TestLocation(){
    const [query,setQuery] = React.useState("")
    const [data,setData] = React.useState([])
    const [latitude,setLatitude] = React.useState("")
    const [longitude,setLongitude] = React.useState("")
    useEffect(()=>{
        return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?limit=5&access_token=pk.eyJ1Ijoic291bmRhcnlhbWVjc2UiLCJhIjoiY2toMmUxZHBoMGJtdDJ3cGNqOWhmbTJqaiJ9.sZeF_rzMTfs2fPBA4JsHxQ`)
        .then(res=>setData(res.data.features))
        .catch((err)=>console.log(err))
    },[query])

    useEffect(()=>{
        return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${Number(longitude)},${Number(latitude)}.json?access_token=pk.eyJ1Ijoic291bmRhcnlhbWVjc2UiLCJhIjoiY2toMmUxZHBoMGJtdDJ3cGNqOWhmbTJqaiJ9.sZeF_rzMTfs2fPBA4JsHxQ`)
        .then(res=>console.log(res))
    },[latitude,longitude])

    const getlocation=()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
            })
        }
     
    }

    return(
       
        <div>
            <input type="text" value={query} name="location" onChange={(e)=>setQuery(e.target.value)} placeholder="enter the location"/>  
            <button onClick={getlocation}>Locate Me</button>
            <div>
                    <ul style={{listStyleType:"none"}} >{query && data && data.map((item,i) => (
                        <>   
                        {/* {i>=active && i<=active+4? */}
                        <li  className={`dropDown`}
                            data-toggle="modal" 
                            data-target="#exampleModal" 
                            key={item}
                            onClick={(e)=>{setQuery(item.place_name)}} >
                            {item.place_name}</li>
                        </>   
                            ))                            
                        }
                    </ul>   
            </div>
        </div>
    )
}

export default TestLocation