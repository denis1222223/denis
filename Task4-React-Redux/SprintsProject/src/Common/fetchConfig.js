import 'isomorphic-fetch';

export var headers = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
});

export function fetchCall(url, method, body) {
    return fetch("api/" + url, {
        headers,
        method,
        body: JSON.stringify(body)
    }).then(response => {
        if (response.status !== 200) {
            return;
        }
        return response.json();
    });
}