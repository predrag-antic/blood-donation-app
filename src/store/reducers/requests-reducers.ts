import {Action} from 'redux';
import { Donation } from '../../models/donation';
import { GET_DONATION_REQUESTS, IGetDonationRequests, ADD_DONATION_REQUEST, IAddDonationRequest, IDeleteDonationRequest, DELETE_DONATION_REQUEST, UPDATE_DONATION_REQUEST, IUpdateDonationRequest } from '../actions/requests-actions';

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
        case UPDATE_DONATION_REQUEST:
            const {changedDonation} = action as IUpdateDonationRequest;
            state.map(donation=> {if(donation.id === changedDonation.id){donation=changedDonation}})
            return [...state];
        default:
            return state;
    }
}