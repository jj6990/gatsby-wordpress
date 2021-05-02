import React, { useContext, useState, useEffect } from 'react'
import { navigate } from "gatsby"
import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'

const Login = () => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            navigate(`/app/profile`);
        }
        if (error) {
            setAlert(error);
            clearErrors();
        }
    }, [error, isAuthenticated]);

    const [user, setUser] = useState({
        username: '',
        password: '',
        email: '',
        password2: ''
    });

    const { email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (email === '' || password === '') {
            setAlert('please enter all fields', 'danger');
        } else {
            login({ email, password });
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" value={email} onChange={onChange} required />
                </div>
                <div>
                    <label htmlFor="password">Pasword:</label>
                    <input type="password" name="password" value={password} onChange={onChange} required  />
                </div>
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login
