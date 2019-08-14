import {combineReducers} from "redux";
import { Donation } from "../../models/donation";
import { requestsReducer } from "./requests-reducers";

export interface RootState{
    requests: Donation[]
}

const rootReducer = combineReducers({
    requests: requestsReducer
})

export default rootReducer;