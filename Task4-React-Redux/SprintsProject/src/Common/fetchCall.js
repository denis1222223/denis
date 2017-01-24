import {showSpinner, hideSpinner} from "./Spinner/spinnerActions";
import 'isomorphic-fetch';

var headers = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
});

export function fetchCall(dispatch, auth, options) {
    if (auth && auth.loggedIn()) {
        headers = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + auth.getToken()
        });
    }

    dispatch(showSpinner());
    return fetch("/api/" + options.url, {
        headers,
        method: options.method, 
        body: JSON.stringify(options.body)
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error();
    }).catch((err) => {
        console.log(err.message);
        dispatch(hideSpinner());
    });
}

export function receive(action) {
    return dispatch => {
        dispatch(action);
        dispatch(hideSpinner());
    }
}