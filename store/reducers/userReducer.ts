import { combineReducers } from 'redux';

const initialState = {
    users: [],
};

const userReducer = (state = initialState, action: any) => {

    switch(action.type) {

        case 'LOAD_ALL_USERS':

        return { 
            ...state, 
            users: action.data
        };

        default:

        return state;
    }
}

export default combineReducers({ userReducer });