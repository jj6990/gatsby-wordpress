import React, { useContext } from "react"
import AuthContext from '../context/auth/authContext'

const Profile = () => {
    const authContext = useContext(AuthContext);
    const { username, userEmail } = authContext;
    console.log(authContext);

    return (
        <>
            <h1>Your profile</h1>
            <ul>
                <li>Name: {username}</li>
                <li>E-mail: {userEmail} </li>
            </ul>
        </>
    )
}
export default Profile