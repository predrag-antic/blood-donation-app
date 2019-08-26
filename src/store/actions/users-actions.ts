import { Action } from 'redux';
import { User } from '../../models/user';

export const GET_USERS = 'GET_USERS';
export const REQUEST_USER = "REQUEST_USER";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";

export interface IGetUsers extends Action {
    users: User[]
}

export interface IRequestUser extends Action {

}

export interface IUpdateUser extends Action {
    updatedUser: User
}

export interface IUpdateUserSuccess extends Action {
    updatedUser: User
}


export function getUsers(users: User[]): IGetUsers {
    return {
        type: GET_USERS,
        users: users
    }
}

export function requestUser(): IRequestUser {
    return {
        type: REQUEST_USER
    }
}

export function updateUser(updatedUser: User) : IUpdateUser {
    return {
        type: UPDATE_USER,
        updatedUser: updatedUser
    }
}

export function updateUserSuccess(updatedUser: User) : IUpdateUserSuccess {
    return {
        type: UPDATE_USER_SUCCESS,
        updatedUser: updatedUser
    }

}
