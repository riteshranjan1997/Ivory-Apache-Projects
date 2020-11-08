import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Bar from "../common/AppBar"
import RegisterModel from "../common/RegisterModel"

function RegisterPage(){
    return(
        <div>
            <Bar/>
            <RegisterModel/>
        </div>
    )
}

export default RegisterPage