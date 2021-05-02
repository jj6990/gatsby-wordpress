import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../types';



const AuthState = props => {

    const initialState = {
        token: null,
        isAuthenticated: null,
        loading: true,
        username: null,
        userEmail: null,
        id: null,
        error: null

    }

    const [state, dispatch] = useReducer(authReducer, initialState);

    //load user

    const loadUser = async () => {

        // if (localStorage.token) {
        //     setAuthToken(localStorage.token);
        // }

        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            }
        }

        const res = await axios.get(`${process.env.WP_ADDRESS}?rest_route=/simple-jwt-login/v1/auth/validate&JWT=${localStorage.token}`, config)
            .then((res) => {
                dispatch({ type: USER_LOADED, payload: res.data });
            }, (err) => {
                console.log(err.response);
                dispatch({ type: AUTH_ERROR, payload: err.response ? err.response.data.data.message : "" });
            });
    }

    //register user

    const register = async formData => {
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { email, username, password } = formData;

        const res = await axios.post(`${process.env.WP_ADDRESS}?rest_route=/simple-jwt-login/v1/users&email=${email}.com&password=${password}&display_name=${username}&first_name=${username}&AUTH_KEY=${process.env.AUTH_KEY}`, formData, config)
            .then((res) => {
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: res.data
                });

            }, (err) => {
                dispatch({
                    type: REGISTER_FAIL,
                    payload: err.response.data.data.message

                });
            });
    }


    //login user
    const login = async formData => {
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { password, email } = formData;

        const res = await axios.post(`${process.env.WP_ADDRESS}?rest_route=/simple-jwt-login/v1/auth&email=${email}&password=${password}`, formData, config)
            .then((res) => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data
                });

                loadUser();

            }, (err) => {
                console.log(err.response);
                dispatch({
                    type: LOGIN_FAIL,
                    payload: err.response ? err.response.data.data.message : "" 
                });
            });
    }

    //logout user
    const logout = () => dispatch({ type: LOGOUT });


    //clear errors
    const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                username: state.username,
                userEmail: state.userEmail,
                error: state.error,
                register,
                loadUser,
                login,
                logout,
                clearErrors
            }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthState;