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
        return response.json();
    }).catch((err) => {
        console.log(err);
        dispatch(hideSpinner());
    });
}

export function receive(action) {
    return dispatch => {
        setTimeout(() => {
            console.log("отобрази и отключи спиннер");
            dispatch(action);
            dispatch(hideSpinner());
        }, 1000);
    }
}