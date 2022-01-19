import { CHANGE_TO_LOGIN_TRUE, CHANGE_TO_LOGIN_FALSE } from '../actions/index'
import { initialLoginState } from './initialLoginState'

const loginReducer = (state = initialLoginState, action) => {

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