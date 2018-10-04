import axios from 'axios';

import * as actionTypes from './actionTypes';

var headers = {
    'Content-Type': 'application/json',
}

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = () => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        isAuthenticated: true
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};



export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = 'http://exygy-challenge-backend.herokuapp.com/users/login';
        axios.post(url, authData, {headers: headers})
            .then(response => {
                localStorage.setItem('token', response.data[0].api_key);
                console.log("******** Mission Accomplished :**************" + response.data[0].api_key);
                localStorage.setItem('fname', response.data[0].first_name);
                localStorage.setItem('lname', response.data[0].last_name);
                localStorage.setItem('email', response.data[0].email);
                dispatch(authSuccess());
                console.log(response.data[0].api_key);
            })
            .catch(err => {
                alert(err.response.data.error);
                dispatch(authFail(err.response.error));
            });
    };
};



