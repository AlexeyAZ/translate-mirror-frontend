import { get, post } from './Api';
import {
  GET_USERS_LIST_REQUEST,
  GET_USERS_LIST_SUCCESS,
  GET_USERS_LIST_ERROR,

  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,

  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,

  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
 } from '../constants/userConstants';

export function userLogin(query, cb) {
  return post({
    url: '/users/login',
    onStart: USER_LOGIN_REQUEST,
    onSuccess: USER_LOGIN_SUCCESS,
    onError: USER_LOGIN_ERROR,
    query,
  },
  cb);
}

export function getUsersList() {
  return get({
    url: '/users',
    onStart: GET_USERS_LIST_REQUEST,
    onSuccess: GET_USERS_LIST_SUCCESS,
    onError: GET_USERS_LIST_ERROR,
  });
}

export function getUser(id) {
  return get({
    url: `/users/${id}`,
    onStart: GET_USER_REQUEST,
    onSuccess: GET_USER_SUCCESS,
    onError: GET_USER_ERROR,
  });
}

export function createUser(query, cb) {
  return post({
    url: '/users',
    onStart: CREATE_USER_REQUEST,
    onSuccess: CREATE_USER_SUCCESS,
    onError: CREATE_USER_ERROR,
    query,
  }, cb);
}