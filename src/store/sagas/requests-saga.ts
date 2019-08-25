import { getRequests, addRequest, updateRequest, deleteRequest } from '../../services/service';
import { getDonationRequests, REQUEST_DONATION_REQUESTS, IAddDonationRequest, addDonationRequest, 
  ADD_DONATION_REQUEST, addDonationRequestSuccess, IUpdateDonationRequest, 
  updateDonationRequestSuccess, 
  IDeleteDonationRequest,
  deleteDonationRequestSuccess} from '../actions/requests-actions';
import { put, call } from 'redux-saga/effects';

export function* fetchDonationRequests(){
  const requests = yield call(getRequests);
  yield put(getDonationRequests(requests));
}

export function* postDonationRequest(request:IAddDonationRequest){
  const newRequest = yield addRequest(request.request);
  yield put(addDonationRequestSuccess(newRequest));
}

export function* updateDonationRequest(updatedDonation:IUpdateDonationRequest){
  const updatedRequest= yield updateRequest(updatedDonation.changedDonation);
  yield put(updateDonationRequestSuccess(updatedRequest))
}

export function* deleteDonationRequest(requestId: IDeleteDonationRequest){
  const deletedRequest = yield deleteRequest(requestId.donationId);
  yield put(deleteDonationRequestSuccess(deletedRequest))
}