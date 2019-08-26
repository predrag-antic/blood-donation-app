import { Action } from 'redux';
import { News } from '../../models/news';

export const GET_NEWS = 'GET_NEWS';
export const REQUEST_NEWS = "REQUEST_NEWS";
export const ADD_NEWS = "ADD_NEWS";
export const ADD_NEWS_SUCCESS = "ADD_NEWS_SUCCESS";

export interface IGetNews extends Action {
    news: News[]
}

export interface IRequestNews extends Action {

}

export interface IAddNews extends Action {
    novelty: News
}

export interface IAddNewsSuccess extends Action {
    novelty: News
}

export function getNews(news: News[]): IGetNews {
    return {
        type: GET_NEWS,
        news: news
    }
}

export function requestNews(): IRequestNews {
    return {
        type: REQUEST_NEWS
    }
}

export function addNews(novelty: News) : IAddNews {
    return {
        type: ADD_NEWS,
        novelty: novelty
    }

}
export function addNewsSuccess(novelty: News) : IAddNewsSuccess {
    return {
        type: ADD_NEWS_SUCCESS,
        novelty: novelty
    }
}
