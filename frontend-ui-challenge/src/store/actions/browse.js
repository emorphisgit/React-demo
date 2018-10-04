import * as actionTypes from './actionTypes';

import axios from 'axios';

var headers = {
    'Content-Type': 'application/json',
}

export const setDetail = ( persons ) => {
    return {
        type: actionTypes.SET_DETAIL,
        persons: persons
    };
};

export const fetchDetailFailed = () => {
    return {
        type: actionTypes.FETCH_DETAIL_FAILED
    };
};

export const initDetail = () => {
    return dispatch => {
        axios.get( 'http://exygy-challenge-backend.herokuapp.com/documents?api_key=123', {headers: headers} )
            .then( response => {
               dispatch(setDetail(response.data));
            })
            .catch( error => {
                dispatch(fetchDetailFailed());
            });
    };
};

export const getInfo = (url) => {
    return dispatch => {
        axios.get( url, {headers: headers} )
            .then( response => {
               dispatch(setDetail(response.data));
            })
            .catch( error => {
                alert("error" + error);
                dispatch(fetchDetailFailed());
            });
    };
};