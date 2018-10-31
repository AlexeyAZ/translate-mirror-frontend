import { get } from './Api';
import {
  GET_USERS_LIST_REQUEST,
  GET_USERS_LIST_SUCCESS,
  GET_USERS_LIST_ERROR,
 } from '../constants/userConstants';

export function getUsersList() {
  return get({
    url: '/users',
    onStart: GET_USERS_LIST_REQUEST,
    onSuccess: GET_USERS_LIST_SUCCESS,
    onError: GET_USERS_LIST_ERROR,
  })
}