import {combineReducers} from "redux";
import { Donation } from "../../models/donation";
import { requestsReducer } from "./requests-reducers";
import { News } from "../../models/news";
import { newsReducer } from "./news-reducer";

export interface RootState{
    requests: Donation[],
    news: News[]
}

const rootReducer = combineReducers({
    requests: requestsReducer,
    news: newsReducer
})

export default rootReducer;