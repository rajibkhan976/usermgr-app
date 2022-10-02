import * as Api from '../api/userApi';

export function getUsers() {
    return function(dispatch: any) {
        return Api.getUsers()
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