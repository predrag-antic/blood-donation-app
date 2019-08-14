import {Action} from 'redux';
import { Donation } from '../../models/donation';
import { GET_DONATION_REQUESTS, IGetDonationRequests, ADD_DONATION_REQUEST, IAddDonationRequest, IDeleteDonationRequest, DELETE_DONATION_REQUEST } from '../actions/requests-actions';

const initialState: Donation[] = [];

export function requestsReducer(state:Donation[]=initialState,action:Action){
    switch(action.type){
        case GET_DONATION_REQUESTS:
            const {requests} = action as IGetDonationRequests;
            return [...state, ...requests];
        case ADD_DONATION_REQUEST:
            const {request} = action as IAddDonationRequest;
            return [...state, request];
        case DELETE_DONATION_REQUEST:
            const {donationId} = action as IDeleteDonationRequest;
            return state.filter(donation=>donation.id!==donationId);
        default:
            return state;
    }
}