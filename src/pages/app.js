import React, { useContext, useEffect } from "react"
import { Router } from "@reach/router"
import Profile from "../components/Profile"
import Login from "../components/auth/Login"
import Register from "../components/auth/Register"
import AlertState from '../context/alert/AlertState'
import Alerts from '../components/Alerts'
import PrivateRoute from  '../components/PrivateRoute'
import AuthContext from '../context/auth/authContext'

const App = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
    }, []);

    return (
        <AlertState>
            <Alerts />
            <Router>
                <PrivateRoute path="/app/profile" component={Profile} />
                <Login path="/app/login" />
                <Register path="/app/register" />
            </Router>
        </AlertState>
    )
}

export default App