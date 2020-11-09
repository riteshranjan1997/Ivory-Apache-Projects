import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom"
import {useSelector} from "react-redux"
import Bar from "../common/AppBar"
import RegisterModel from "../common/RegisterModel"

function RegisterPage(){

    const isAuth = useSelector((state) => state.auth.isAuth);

    if (isAuth) {
        return <Redirect to="/lets-eat" />;
    }

    return(
        <div>
            <Bar/>
            <RegisterModel/>
        </div>
    )
}

export default RegisterPage