import { getUsersService, getUserService, updateUserService } from "../../services/users-service";
import { getUsers, IUpdateUser, updateUser, updateUserSuccess } from '../../store/actions/users-actions';
import { put, call } from 'redux-saga/effects';


export function* fetchUsers(){
    const users = yield call(getUsersService);
    yield put(getUsers(users));
  }
  
  export function* updateUserSaga(updatedUser:IUpdateUser){
    const changedUser= yield updateUserService(updatedUser.updatedUser);
    yield put(updateUserSuccess(changedUser))
  }