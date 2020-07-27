function deserializeData(x) {
    return x.json();
}

function handleError(x) {
    if (!x.ok) {
        throw new Error(
            JSON.stringify({
                status: x.status,
                statusText: x.statusText,
            })
        );
    }
    return x;
}

export function genericFetch(deserialization = deserializeData, errorHandling = handleError, url) {
    return fetch(url).then(errorHandling).then(deserialization);
}
