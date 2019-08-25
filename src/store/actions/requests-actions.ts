import { Action } from 'redux';
import { Donation } from '../../models/donation';

export const GET_DONATION_REQUESTS = 'GET_DONATION_REQUESTS';
export const REQUEST_DONATION_REQUESTS = 'REQUEST_DONATION_REQUESTS';
export const ADD_DONATION_REQUEST = 'ADD_DONATION_REQUEST';
export const ADD_DONATION_REQUEST_SUCCESS = 'ADD_DONATION_REQUEST_SUCCESS';
export const DELETE_DONATION_REQUEST = 'DELETE_DONATION_REQUEST';
export const DELETE_DONATION_REQUEST_SUCCESS = 'DELETE_DONATION_REQUEST_SUCCESS';
export const UPDATE_DONATION_REQUEST = 'UPDATE_DONATION_REQUEST';
export const UPDATE_DONATION_REQUEST_SUCCESS = 'UPDATE_DONATION_REQUEST_SUCCESS';

export interface IGetDonationRequests extends Action {
    requests:Donation[]
}

export interface IRequestDonationRequests extends Action {

}

export interface IAddDonationRequest extends Action {
    request: Donation
}

export interface IAddDonationRequestSuccess extends Action {
    request: Donation
}

export interface IDeleteDonationRequest extends Action {
    donationId: number
}

export interface IDeleteDonationRequestSuccess extends Action {
    donationId: number
}

export interface IUpdateDonationRequest extends Action {
    changedDonation: Donation
}

export interface IUpdateDonationRequestSuccess extends Action {
    changedDonation: Donation
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

export function addDonationRequestSuccess(request: Donation) : IAddDonationRequestSuccess {
    return {
        type: ADD_DONATION_REQUEST_SUCCESS,
        request: request
    };
}

export function deleteDonationRequest(donationId: number) : IDeleteDonationRequest {
    return {
        type: DELETE_DONATION_REQUEST,
        donationId:donationId
    };
}

export function deleteDonationRequestSuccess(donationId: number) : IDeleteDonationRequestSuccess {
    return {
        type: DELETE_DONATION_REQUEST_SUCCESS,
        donationId:donationId
    };
}

export function updateDonationRequest(changedDonation: Donation) : IUpdateDonationRequest {
    return {
        type: UPDATE_DONATION_REQUEST,
        changedDonation: changedDonation
    };
}

export function updateDonationRequestSuccess(changedDonation: Donation) : IUpdateDonationRequestSuccess {
    return {
        type: UPDATE_DONATION_REQUEST_SUCCESS,
        changedDonation: changedDonation
    };
}

