import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom"
import {useSelector} from "react-redux"
import Bar from "../common/AppBar"
import RegisterModel from "../common/RegisterModel"
import { Grid } from '@material-ui/core';

function RegisterPage(){

    const isAuth = useSelector((state) => state.auth.isAuth);

    if (isAuth) {
        return <Redirect to="/lets-eat" />;
    }

    return(
        <div>
            <Grid container>
                <Grid item xs={12}>
                <Bar/>
                </Grid>
                <Grid item xs={12} style={{marginTop:"60px"}}>
                <RegisterModel/>
                </Grid>
            </Grid>
            
           
        </div>
    )
}

export default RegisterPage