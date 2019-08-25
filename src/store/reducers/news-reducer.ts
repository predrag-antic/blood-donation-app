import { Action } from 'redux';
import { News } from '../../models/news';
import { GET_NEWS, ADD_NEWS, IGetNews, IAddNews } from '../actions/news-actions';

const initialState: News[] = [];

export function newsReducer(state:News[]=initialState, action:Action){
    switch(action.type){
        case GET_NEWS:
            const {news} = action as IGetNews;
            return [...state, ...news];
        case ADD_NEWS:
            const {novelty} = action as IAddNews;
            return [...state, novelty];
        default:
            return state;
    }
}