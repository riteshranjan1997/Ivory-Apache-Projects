import React from 'react'
import { Redirect } from "react-router-dom"
import {useSelector} from "react-redux"
import AppBar from "../common/AppBar"
import LoginModel from "../common/LoginModel"

function LoginPage(){
    const isAuth = useSelector((state) => state.auth.isAuth);

    if (isAuth) {
        return <Redirect to="/lets-eat" />;
    }
    
    return(
        <div>
            <AppBar/>
            <LoginModel/>
        </div>
    )
}

export default LoginPage