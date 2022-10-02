import * as Api from '../api/userApi';
import { User } from '../../interfaces/UserInterface';

export function getUsers() {
    return async function(dispatch: any) {
        return await Api.getUsers()
        .then((result) => {
            return dispatch({
                type: 'LOAD_ALL_USERS',
                data: result.data
            });
        })
        .catch((error) => {
            return dispatch({
                type: 'LOADING_ALL_USERS_FAILED',
                data: 'Fetching all users failed due to' + error
            });
        })
    }
}

export function addUser(user: User) {
    return async function(dispatch: any) {
        return await dispatch({
            type: 'ADD_USER',
            data: user
        });
    }
}