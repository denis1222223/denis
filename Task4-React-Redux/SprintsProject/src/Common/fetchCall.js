import {showSpinner, hideSpinner} from "./Spinner/spinnerActions";

export function fetchCall(dispatch, url, method, data) {
    dispatch(showSpinner());
    return $.ajax({
        method,
        url: "/api/" + url,
        data
    })
    .catch((err) => {
        console.log(err);
        dispatch(hideSpinner());
    })
}

export function receive(action) {
    return dispatch => {
        dispatch(action);
        dispatch(hideSpinner());
    }
}