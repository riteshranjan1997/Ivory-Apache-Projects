import React from 'react'
import AppBar from "../common/AppBar"
import LoginModel from "../common/LoginModel"

function LoginPage(){
    return(
        <div>
            <AppBar addressModel="true"/>
            <LoginModel/>
        </div>
    )
}

export default LoginPage