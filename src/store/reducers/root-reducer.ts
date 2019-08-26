import {combineReducers} from "redux";
import { Donation } from "../../models/donation";
import { requestsReducer } from "./requests-reducers";
import { News } from "../../models/news";
import { newsReducer } from "./news-reducer";
import { usersReducer } from "./users-reducer";
import { User } from "../../models/user";

export interface RootState{
    requests: Donation[],
    news: News[],
    users: User[]
}

const rootReducer = combineReducers({
    requests: requestsReducer,
    news: newsReducer,
    users: usersReducer
})

export default rootReducer;