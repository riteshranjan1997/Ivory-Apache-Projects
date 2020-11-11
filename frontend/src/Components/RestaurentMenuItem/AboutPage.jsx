import React from 'react'
import data from '../../data.json'

function AboutPage(){
    return(
        <div>
            {data && data.map((item)=>(
                <div>
                    <div><h2>{item.name}</h2></div>
                    <div></div>
                </div>
            ))}

        </div>
    )
}

export default AboutPage