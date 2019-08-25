import { Donation } from "../models/donation";

export function getRequests(){
    return fetch('http://localhost:3001/requests')
    .then(response=>response.json());
}

export function addRequest(request:Donation) {
    const newRequest = {
        method: "post",
        body: JSON.stringify(request),
        headers: {'Content-Type':'application/json'}
    };
    return fetch('http://localhost:3001/requests',newRequest)
            .then((response)=>response.json())
}

export function updateRequest(request: Donation) {
    const newRequest = {
        method: "put",
        body: JSON.stringify(request),
        headers: {'Content-Type':'application/json'}
    };
    return fetch(`http://localhost:3001/requests/${request.id}`,newRequest)
            .then((response)=>response.json())
}

export function deleteRequest(requestId: number){
    const oldrequest = {
        method: "delete",
        
    }
    return fetch(`http://localhost:3001/requests/${requestId}`,oldrequest)
            .then((response)=>response.json())
}