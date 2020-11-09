import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "../common/AppBar"
import RegisterModel from "../common/RegisterModel"

function RegisterPage(){
    return(
        <div>
            <AppBar/>
            <RegisterModel/>
        </div>
    )
}

export default RegisterPage