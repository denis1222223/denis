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