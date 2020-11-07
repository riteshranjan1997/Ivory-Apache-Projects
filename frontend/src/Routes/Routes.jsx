import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Profile from '../Components/Account/Profile'
import Address from "../Components/Account/Address"
import Payments from '../Components/Account/Payments'

function Routes(){
    return(
        <Switch>
            <Route path = "/" exact render={(props)=><Profile props={props}/>} />
            <Route path="/account/Profile" render={(props)=><Profile props={props}/>} />
            <Route path="/account/Address and Phone" render={(props)=><Address props={props}/>} />
            <Route path="/account/Payments" render={(props)=><Payments props={props}/>} />
        </Switch>
    )
}

export default Routes