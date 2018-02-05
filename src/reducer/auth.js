import {LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "../constants"

const initialState = {
  isAuthenticating: false,
  currentUser: null,
  errorMessage: null
}

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
       	...state,
        isAuthenticating: true
      }
    case LOGIN_FAILURE:
      return {
       	...state,
        isAuthenticating: false,
        errorMessage: action.errorMessage
      }
    case LOGIN_SUCCESS:
      return {
        isAuthenticating: false,
        currentUser: action.user,
        errorMessage: null
      }
    case LOGOUT:
      return {
        isAuthenticating: false,
        currentUser: null,
        errorMessage: null
      }
    default:
      return state
  }
}