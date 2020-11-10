import React from "react"

export default function ErrorBar(props) {

    return(
        <div className="container" style={{textAlign:"center", color:"white", fontSize:"14", fontFamily:"Poppins"}}>
            <p>{props.error}</p>
        </div>
    )
}
