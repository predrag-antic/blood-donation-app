export function getRequests(){
    return fetch('http://localhost:3001/requests')
    .then(response=>response.json());
}