import {showSpinner, hideSpinner} from "./Spinner/spinnerActions";
import 'isomorphic-fetch';

var headers = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
});

export function fetchCall(dispatch, url, method, body) {
    dispatch(showSpinner());
    return fetch("/api/" + url, {
        headers,
        method, body: JSON.stringify(body)
    }).then(response => {
        return response.json();
    }).catch((err) => {
        console.log(err);
        dispatch(hideSpinner());
    });
}

export function receive(action) {
    return dispatch => {
        dispatch(action);
        dispatch(hideSpinner());
    }
}