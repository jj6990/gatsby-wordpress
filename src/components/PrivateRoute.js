import React, { useContext } from "react"
import { navigate } from "gatsby"
import AuthContext from '../context/auth/authContext'

const PrivateRoute = ({ component: Component, location, ...rest }) => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated } = authContext;

    if (!isAuthenticated && location.pathname !== `/app/login`) {
        navigate("/app/login")
        return null
    }
    return <Component {...rest} />
}
export default PrivateRoute