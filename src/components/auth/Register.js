import React, { useContext, useState, useEffect } from 'react'
import { navigate } from "gatsby"
import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'

const Register = () => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { register, error, clearErrors, isAuthenticated } = authContext;

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

    const { username, email, password, password2 } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (username === '' || email === '' || password === '') {
            setAlert('please enter all fields', 'danger');
        } else if (password !== password2) {
            setAlert('passwords do not match', 'danger');
        } else {
            register({ username, email, password });
        }
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="username" value={username} onChange={onChange} required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" value={email} onChange={onChange} required />
                </div>
                <div>
                    <label htmlFor="password">Pasword:</label>
                    <input type="password" name="password" value={password} onChange={onChange} required minLength="6" />
                </div>
                <div>
                    <label htmlFor="pasword2">Confirm Pasword:</label>
                    <input type="password" name="password2" value={password2} onChange={onChange} required minLength="6" />
                </div>
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register;
