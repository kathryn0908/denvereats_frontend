import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Profile from '../components/Profile'


export default function PrivateRoute(props){

    return(
        localStorage.token 
        ? <Route {...props} render={(routerProps) => (
            <Profile {...routerProps} addNewUser={props.addNewUser}/>
        )}/>
        : <Redirect to='/login' />
    )

}