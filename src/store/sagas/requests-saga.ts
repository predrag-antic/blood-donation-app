import { getRequests } from '../../services/service';
import { getDonationRequests, REQUEST_DONATION_REQUESTS } from '../actions/requests-actions';
import { put, all, takeEvery, call } from 'redux-saga/effects';

export function* fetchDonationRequests(){
  const requests = yield call(getRequests);
  yield put(getDonationRequests(requests));
}

export function* rootSaga() {
    yield all([
      takeEvery(REQUEST_DONATION_REQUESTS, fetchDonationRequests)
    ]);
  }