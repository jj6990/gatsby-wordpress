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

export default (state, action) => {
    console.log(action.payload);
    switch (action.type) {
        case USER_LOADED:
            return {
                ...state,
                userEmail: action.payload.data.user.user_email,
                username: action.payload.data.user.display_name,
                isAuthenticated: true,
                loading: false
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                userEmail: action.payload.user.user_email,
                username: action.payload.user.display_name,
                isAuthenticated: true,
                loading: false
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.data.jwt);
            return {
                ...state,
                token: action.payload.data.jwt,
                isAuthenticated: true,
                loading: false
            };
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}