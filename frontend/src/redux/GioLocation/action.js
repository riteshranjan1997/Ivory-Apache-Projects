import axios from 'axios'

export const GIO_LOCATION_REQUEST ="GIO_LOCATION_REQUEST"
export const GIO_LOCATION_SUCCESS = "GIO_LOCATION_SUCCESS"
export const GIO_LOCATION_FAILURE = "GIO_LOCATION_FAILURE"

export const gioLocationRequest = () =>({
    type : GIO_LOCATION_REQUEST
})

export const gioLocationSuccess = (payload) =>({
    type : GIO_LOCATION_SUCCESS,
    payload
})

export const gioLocationFailure = (payload) =>({
    type : GIO_LOCATION_FAILURE,
    payload
})

export const gioLocationData=(payload)=>(dispatch)=>{
    dispatch(gioLocationRequest())
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${payload}.json?limit=5&access_token=pk.eyJ1Ijoic291bmRhcnlhbWVjc2UiLCJhIjoiY2toMmUxZHBoMGJtdDJ3cGNqOWhmbTJqaiJ9.sZeF_rzMTfs2fPBA4JsHxQ`
      )
    //   .then((res) => setData(res.data.features))
    .then(res=>dispatch(gioLocationSuccess(res.data.features[1].geometry.coordinates)))
      .catch((err) =>gioLocationFailure(err));
    
}