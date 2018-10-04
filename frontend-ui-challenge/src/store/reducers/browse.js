import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    persons: [],
    success: false
};

const setDetail = (state, action) => {
    return updateObject( state, {
        persons: action.persons,
        success: true
    });
};

const fetchDetailFailed = (state, action) => {
    return updateObject( state, { error: true } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_DETAIL: return setDetail(state, action);    
        case actionTypes.FETCH_DETAIL_FAILED: return fetchDetailFailed(state, action);
        default: return state;
    }
};

export default reducer;