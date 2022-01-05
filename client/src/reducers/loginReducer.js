import { CHANGE_TO_LOGIN_TRUE, CHANGE_TO_LOGIN_FALSE } from '../actions/index'
import { initialState } from './initialState'

const loginReducer = (state = initialState, action) => {

  switch (action.type) {
  case CHANGE_TO_LOGIN_TRUE:
    return Object.assign({}, state, {
      isLogin: action.payload.isLogin
    })
  case CHANGE_TO_LOGIN_FALSE:
    return Object.assign({}, state, {
      isLogin: action.payload.isLogin
    })
  default:
    return state
  }
}

export default loginReducer