import { all, takeEvery } from 'redux-saga/effects';

import { REQUEST_DONATION_REQUESTS, ADD_DONATION_REQUEST, UPDATE_DONATION_REQUEST, DELETE_DONATION_REQUEST } from "../actions/requests-actions";
import { fetchDonationRequests, postDonationRequest, updateDonationRequest, deleteDonationRequest} from "./requests-saga";
import { ADD_NEWS, REQUEST_NEWS } from '../actions/news-actions';
import { fetchNews, postNovelty } from './news-saga';

export function* rootSaga() {
    yield all([
      takeEvery(REQUEST_DONATION_REQUESTS, fetchDonationRequests),
      takeEvery(ADD_DONATION_REQUEST, postDonationRequest),
      takeEvery(ADD_NEWS,postNovelty),
      takeEvery(REQUEST_NEWS,fetchNews),
      takeEvery(UPDATE_DONATION_REQUEST, updateDonationRequest),
      takeEvery(DELETE_DONATION_REQUEST, deleteDonationRequest)
    ]);
  }