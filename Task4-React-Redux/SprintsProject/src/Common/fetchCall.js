import {hideSpinner} from "./Spinner/spinnerActions";

export function fetchCall(url, method, data) {
    return $.ajax({
        method,
        url: "api/" + url,
        data
    })
    .catch((err) => {
        console.log(err);
    })
}

export function receive(action) {
    return dispatch => {
        dispatch(action);
        dispatch(hideSpinner());
    }
}