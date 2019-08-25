import { News } from "../models/news";

export function getNewsService(){
    return fetch('http://localhost:3001/blog')
    .then(response=>response.json());
}

export function addNoveltyService(request:News) {
    const newNovelty = {
        method: "post",
        body: JSON.stringify(request),
        headers: {'Content-Type':'application/json'}
    };
    return fetch('http://localhost:3001/blog',newNovelty)
            .then((response)=>response.json())
}