import 'isomorphic-fetch';

export const domen = "http://localhost:10702/api/";

export var headers = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
});

export function fetchCall(url, method, body) {
    return fetch(domen + url, {
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