import { Action } from 'redux';
import { GET_USERS, UPDATE_USER, IUpdateUser, IGetUsers } from '../actions/users-actions';
import { User } from '../../models/user';

const initialState: User[] = [];

export function usersReducer(state:User[]=initialState, action:Action){
    switch(action.type){
        case GET_USERS:
            const {users} = action as IGetUsers;
            return [...state, ...users];
        case UPDATE_USER:
            const {updatedUser} = action as IUpdateUser;
            state.map(user=> {if(user.id === updatedUser.id){user=updatedUser}})
            return [...state];
        default:
            return state;
    }
}