import { Action } from 'redux';
import { Donation } from '../../models/donation';

export const GET_DONATION_REQUESTS = 'GET_DONATION_REQUESTS';
export const REQUEST_DONATION_REQUESTS = 'REQUEST_DONATION_REQUESTS';
export const ADD_DONATION_REQUEST = 'ADD_DONATION_REQUEST';
export const DELETE_DONATION_REQUEST = 'DELETE_DONATION_REQUEST';
export const UPDATE_DONATION_REQUEST = 'UPDATE_DONATION_REQUEST';

export interface IGetDonationRequests extends Action {
    requests:Donation[]
}

export interface IRequestDonationRequests extends Action {

}

export interface IAddDonationRequest extends Action {
    request: Donation
}

export interface IDeleteDonationRequest extends Action {
    donationId: string
}

export interface IUpdateDonationRequest extends Action {
    request: Donation
}

export function getDonationRequests(requests: Donation[]) : IGetDonationRequests {
    return {
        type: GET_DONATION_REQUESTS,
        requests: requests
    };
}

export function requestDonationRequests() : IRequestDonationRequests {
    return {
        type: REQUEST_DONATION_REQUESTS
    };
}

export function addDonationRequest(request: Donation) : IAddDonationRequest {
    return {
        type: ADD_DONATION_REQUEST,
        request: request
    };
}

export function deleteDonationRequest(donationId: string) : IDeleteDonationRequest {
    return {
        type: DELETE_DONATION_REQUEST,
        donationId:donationId
    };
}

export function updateDonationRequest(request: Donation) : IUpdateDonationRequest {
    return {
        type: UPDATE_DONATION_REQUEST,
        request: request
    };
}
