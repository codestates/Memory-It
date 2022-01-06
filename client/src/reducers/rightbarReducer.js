import { CREATE_POST_MODE, MODIFY_PROFILE_MODE, DETAILED_POST_MODE, WELCOME_MODE } from '../actions/index'
import { initialRightBarState } from './initialRightBarState'

const rightbarReducer = (state = initialRightBarState, action) => {

  switch (action.type) {
  case CREATE_POST_MODE:
    return Object.assign({}, state, {
      rightbar: action.payload.rightBar
    })
  case MODIFY_PROFILE_MODE:
    return Object.assign({}, state, {
      rightbar: action.payload.rightBar
    })
  case DETAILED_POST_MODE:
    return Object.assign({}, state, {
      rightbar: action.payload.rightBar
    })
  case WELCOME_MODE:
    return Object.assign({}, state, {
      rightbar: action.payload.rightBar
    })      
  default:
    return state
  }
}

export default rightbarReducer